const initialState = {
    healthConcerns: [],
    selectedHealthConcerns: [],
    diets: [],
    allergies: [],
    lifestyle: {
      isSmoke: false,
      alcohol: '',
      dailyExposure: false,
    },
    userPreferences: {},
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_HEALTH_CONCERNS':
        return { ...state, healthConcerns: action.payload };
      case 'SET_SELECTED_HEALTH_CONCERNS':
        return { ...state, selectedHealthConcerns: action.payload };
      case 'SET_DIETS':
        return { ...state, diets: action.payload };
      case 'SET_ALLERGIES':
        return { ...state, allergies: action.payload };
      case 'SET_LIFESTYLE':
        return { ...state, lifestyle: action.payload };
      case 'SET_USER_PREFERENCES':
        return { ...state, userPreferences: action.payload };
      default:
        return state;
    }
  };
  
  export default formReducer;