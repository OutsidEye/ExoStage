angular.module('ConferenceApp').controller("ConferencesCtrl", ConferencesCtrl);

function ConferencesCtrl($scope,ConferencesDataFactory,$route){
  var vm = this;
  $scope.showModal = false;
  vm.isSubmitted = false;

  ConferencesDataFactory.conferenceList().then(function(res){
    vm.conferences = res.data;
  });

  vm.toggleModalAddConf = function(){
    $scope.showModalAdd = !$scope.showModalAdd;
  }

  vm.toggleModalEditConf = function(id){
    $scope.showModalEdit = !$scope.showModalEdit;
    ConferencesDataFactory.conferenceDisplay(id).then(function(response){
      vm.conference = response.data;
      vm.conference.realDate = new Date(vm.conference.date);
      vm.conference.dateUpdate = (vm.conference.realDate.getDate() < 10 ? ("0"+(vm.conference.realDate.getDate())) : (vm.conference.realDate.getDate())) + "/" + (vm.conference.realDate.getMonth() < 10 ? ("0"+(vm.conference.realDate.getMonth()+1)) : (vm.conference.realDate.getMonth()+1)) + "/" + vm.conference.realDate.getFullYear();
      vm.conference.hour = (vm.conference.realDate.getHours() < 10 ? ("0"+(vm.conference.realDate.getHours())) : (vm.conference.realDate.getHours())) + ":" + (vm.conference.realDate.getMinutes() < 10 ? ("0"+(vm.conference.realDate.getMinutes())):(vm.conference.realDate.getMinutes()));
    }).catch(function(error){
      console.log(error);
    });
  }

  vm.updateConference = function(id){
    var date = vm.conference.dateUpdate.split("/");
    var dateFinal = date[2]+"-"+date[1]+"-"+date[0]+" "+vm.conference.hour;
    var postData = {
      image :vm.conference.image,
      date : new Date(dateFinal),
      nomConference : vm.conference.nomConference,
      adresse :  vm.conference.adresse,
      ville : vm.conference.ville,
      participants : vm.conference.participants
    }
    ConferencesDataFactory.conferenceUpdate(id,postData).then(function(response){
      if(response.status === 204){
        $("div.modal.fade").modal('hide');
        ConferencesDataFactory.conferenceList().then(function(response){
          vm.conferences = response.data;
        }).catch(function(error){
          console.log(error);
        });
      }
    }).catch(function(error){
      console.log(error);
    });
  }

  vm.addParticipants = function(conference){
      conference.participants +=1;
      ConferencesDataFactory.conferenceUpdate(conference._id,conference).then(function(response){
        if(response.status === 204){
          ConferencesDataFactory.conferenceList().then(function(response){
            vm.conferences = response.data;
          }).catch(function(error){
            console.log(error);
          });
        }
      }).catch(function(error){
        console.log(error);
      });
  }

  vm.addConference = function(){

    var date = vm.date.split("/");
    var dateFinal = date[2]+"-"+date[1]+"-"+date[0]+" "+vm.hour;
    var postData = {
      image : vm.image,
      date : new Date(dateFinal),
      nomConference : vm.nom,
      adresse : vm.adresse,
      ville : vm.ville,
      participants : 0
    }

    if(vm.conferenceForm.$valid){
      ConferencesDataFactory.conferenceAdd(postData).then(function(response){
        if(response.status === 201){
          $("div.modal.fade").modal('hide');
          ConferencesDataFactory.conferenceList().then(function(response){
            vm.conferences = response.data;
          }).catch(function(error){
            console.log(error);
          });
        }
      }).catch(function(error){
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  }
}
