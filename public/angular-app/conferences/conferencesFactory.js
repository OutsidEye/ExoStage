angular.module("ConferenceApp").factory("ConferencesDataFactory", ConferencesDataFactory);
function ConferencesDataFactory($http){
  return {
    conferenceList: conferenceList,
    conferenceAdd: conferenceAdd,
    conferenceDisplay: conferenceDisplay,
    conferenceUpdate: conferenceUpdate
  }

  function conferenceList(){
    return $http.get('/api/conferences').then(complete).catch(failed);
  }
  function conferenceAdd(postData){
    return $http.post('/api/conferences', postData).then(complete).catch(failed);
  }
  function conferenceDisplay(id){
    return $http.get('/api/conferences/' + id).then(complete).catch(failed);
  }
  function conferenceUpdate(id, postData){
    return $http.put('/api/conferences/' + id, postData).then(complete).catch(failed);
  }
  function complete(response){
    return response;
  }
  function failed(err) {
    return err;
  }
}
