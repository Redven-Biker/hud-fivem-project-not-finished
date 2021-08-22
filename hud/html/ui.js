$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;
        $("#progressbar-run").css("width",data.stamina + "%");
        if (event.data.action == "updateStatus") {
            updateStatus(event.data.st);
        }
    })
})

function updateStatus(status){
    $('#progressbar-food').css('width', status[0].percent+'%')
    $('#progressbar-drink').css('width', status[1].percent+'%')
}

$(function() {
    var $heal = $("#progressbar-heal");
    var $armor = $("#progressbar-armor");
    window.addEventListener('message', function(event){
        $heal.css("width", (event.data.heal-100)+"%");
        $armor.css("width", (event.data.armor)+"%");
    }); 
});