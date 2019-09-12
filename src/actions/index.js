// Action creators/types
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = feature => {
  console.log('ADD FEATURE FUNCITON', feature)
  return {type: 'REMOVE_FEATURE', payload: feature};
};

export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = feature => {
  console.log('REMOVE FEATURE FUNCTION', feature)
  return {type: 'BUY_ITEM', payload: feature};
};