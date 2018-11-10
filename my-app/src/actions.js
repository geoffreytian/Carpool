import config from './config';

const ADD_RIDER = 'ADD_RIDER';
const ADD_RIDER_SUCCESS = 'ADD_RIDER_SUCCESS';
const ADD_RIDER_FAILURE = 'ADD_RIDER_FAILURE';
const GET_RIDER_BY_ID = 'GET_RIDER_BY_ID';
const GET_RIDER_BY_ID_SUCCESS = 'GET_RIDER_BY_ID_SUCCESS';
const GET_RIDER_BY_ID_FAILURE = 'GET_RIDER_BY_ID_FAILURE';

const CREATE_DRIVER = 'CREATE_DRIVER';
const CREATE_DRIVER_SUCCESS = 'CREATE_DRIVER_SUCCESS';
const CREATE_DRIVER_FAILURE = 'CREATE_DRIVER_FAILURE';
const GET_DRIVER_BY_ID = 'GET_DRIVER_BY_ID';
const GET_DRIVER_BY_ID_SUCCESS = 'GET_DRIVER_BY_ID_SUCCESS';
const GET_DRIVER_BY_ID_FAILURE = 'GET_DRIVER_BY_ID_FAILURE';

const createDriver = ({
  firstName,
  lastName,
  email,
  destination,
  preferredPickupLocation
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
        preferredPickupLocation,
        riderIds: []
      })
    }
  )
  .then(res => res.json())
  .then(data => dispatch({ type: CREATE_DRIVER_SUCCESS, data }))
  .catch(error => dispatch({ type: CREATE_DRIVER_FAILURE, error }));
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
  .then(data => dispatch({ type: GET_DRIVER_BY_ID_SUCCESS, data }))
  .catch(error => dispatch({ type: GET_DRIVER_BY_ID_FAILURE, error }));
};

export {
  ADD_RIDER,
  ADD_RIDER_SUCCESS,
  ADD_RIDER_FAILURE,
  GET_RIDER_BY_ID,
  GET_RIDER_BY_ID_SUCCESS,
  GET_RIDER_BY_ID_FAILURE,
  CREATE_DRIVER,
  CREATE_DRIVER_SUCCESS,
  CREATE_DRIVER_FAILURE,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_ID_SUCCESS,
  GET_DRIVER_BY_ID_FAILURE,
  createDriver,
  addRider,
  riderById,
  driverById
};
