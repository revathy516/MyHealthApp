import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import healthConcernsData from '../../assets/Healthconcern.json';
import dietsData from '../../assets/Diets.json';
import allergiesData from '../../assets/allergies.json';

function* fetchLocalJson(action) {
  try {
    let data;
    switch(action.payload) {
      case 'HealthConcern.json':
        data = healthConcernsData;
        break;
      case 'Diets.json':
        data = dietsData;
        break;
      case 'Allergies.json':
        data = allergiesData;
        break;
      default:
        throw new Error('Unknown JSON file');
    }
    yield put({ type: `SET_${action.type.split('_')[1]}`, payload: data.data });
  } catch (error) {
    console.error('Error fetching local JSON:', error);
  }
}

function* savePreferences(action) {
  try {
    yield call(AsyncStorage.setItem, 'userPreferences', JSON.stringify(action.payload));
    console.log('Preferences saved:', action.payload);
  } catch (error) {
    console.error('Error saving preferences:', error);
  }
}

export default function* formSaga() {
  yield takeLatest('FETCH_HEALTH_CONCERNS', fetchLocalJson);
  yield takeLatest('FETCH_DIETS', fetchLocalJson);
  yield takeLatest('FETCH_ALLERGIES', fetchLocalJson);
  yield takeLatest('SAVE_PREFERENCES', savePreferences);
}
