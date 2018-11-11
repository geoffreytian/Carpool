import config from './config';

export const ADD_RIDER = 'ADD_RIDER';
export const ADD_RIDER_SUCCESS = 'ADD_RIDER_SUCCESS';
export const ADD_RIDER_FAILURE = 'ADD_RIDER_FAILURE';

export const CREATE_RIDER = 'CREATE_RIDER';
export const CREATE_RIDER_SUCCESS = 'CREATE_RIDER_SUCCESS';
export const CREATE_RIDER_FAILURE = 'CREATE_RIDER_FAILURE';
export const GET_RIDER_BY_ID = 'GET_RIDER_BY_ID';
export const GET_RIDER_BY_ID_SUCCESS = 'GET_RIDER_BY_ID_SUCCESS';
export const GET_RIDER_BY_ID_FAILURE = 'GET_RIDER_BY_ID_FAILURE';

export const UPDATE_DRIVER = 'UPDATE_DRIVER';
export const UPDATE_DRIVER_SUCCESS = 'UPDATE_DRIVER_SUCCESS';
export const UPDATE_DRIVER_FAILURE = 'UPDATE_DRIVER_FAILURE';
export const CREATE_DRIVER = 'CREATE_DRIVER';
export const CREATE_DRIVER_SUCCESS = 'CREATE_DRIVER_SUCCESS';
export const CREATE_DRIVER_FAILURE = 'CREATE_DRIVER_FAILURE';
export const GET_DRIVER_BY_ID = 'GET_DRIVER_BY_ID';
export const GET_DRIVER_BY_ID_SUCCESS = 'GET_DRIVER_BY_ID_SUCCESS';
export const GET_DRIVER_BY_ID_FAILURE = 'GET_DRIVER_BY_ID_FAILURE';

const createDriver = ({
  firstName,
  lastName,
  email,
  destination,
  pickup,
  capacity
}) => dispatch => {
  dispatch({ type: CREATE_DRIVER });
  return fetch(
    `http://${config.serverEndpoint}/drivers/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        destination,
        pickup,
        capacity,
        riderIds: []
      })
    }
  )
  .then(res => res.json())
  .then(data => dispatch({ type: CREATE_DRIVER_SUCCESS, data }))
  .catch(error => dispatch({ type: CREATE_DRIVER_FAILURE, error }));
};

const createRider = ({
  firstName,
  lastName,
  email,
  destination,
  pickup
}) => dispatch => {
  dispatch({ type: CREATE_RIDER });
  return fetch(
    `http://${config.serverEndpoint}/riders/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        destination,
        pickup
      })
    }
  )
  .then(res => res.json())
  .then(data => dispatch({ type: CREATE_RIDER_SUCCESS, data }))
  .catch(error => dispatch({ type: CREATE_RIDER_FAILURE, error }));
};

const addRider = (driverId, riderId) => dispatch => {
  dispatch({ type: ADD_RIDER });
  return driverById(driverId)(dispatch)
    .then(driver => fetch(
      `http://${config.serverEndpoint}/drivers/${driverId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...driver,
          riderIds: [...driver.riderIds, riderId]
        })
      }
    ))
    .then(() => dispatch({ type: ADD_RIDER_SUCCESS }))
    .then(() => driverById(driverId))
    .catch(error => dispatch({ type: ADD_RIDER_FAILURE, error }));
};

const riderById = id => dispatch => {
  dispatch({ type: GET_RIDER_BY_ID });
  return fetch(
    `http://${config.serverEndpoint}/riders/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  )
  .then(res => res.json())
  .then(data => {
    dispatch({ type: GET_RIDER_BY_ID_SUCCESS, data })
    return data;
  })
  .catch(error => {
    dispatch({ type: GET_RIDER_BY_ID_FAILURE, error });
  });
};

const updateDriver = (id, input) => dispatch => {
  dispatch({ type: UPDATE_DRIVER });
  return fetch(
    `http://${config.serverEndpoint}/drivers/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(input)
    }
  )
  .then(res => res.json())
  .then(data => {
    dispatch({ type: UPDATE_DRIVER_SUCCESS, data })
  })
  .catch(error => dispatch({ type: UPDATE_DRIVER_FAILURE, error }));
};

const driverById = id => dispatch => {
  dispatch({ type: GET_DRIVER_BY_ID });
  return fetch(
    `http://${config.serverEndpoint}/drivers/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  )
  .then(res => res.json())
  .then(data => {
    dispatch({ type: GET_DRIVER_BY_ID_SUCCESS, data })
  })
  .catch(error => dispatch({ type: GET_DRIVER_BY_ID_FAILURE, error }));
};

export {
  createDriver,
  createRider,
  addRider,
  riderById,
  driverById
};
