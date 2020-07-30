var api = 'https://zeinamvc.azurewebsites.net/ZeinaAPI';
var job;
$(function () {
    get_careers();
});
function get_careers() {
    try {
        $.ajax({
            url: api,
            type: "GET",
            async: false,
            dataType: "json",
            success: function (response) {

                var job_filterd = [];

                job_filterd = response.filter(function (d) {
                    return d.id == $.urlParam('jobid');
                });

                job = job_filterd
                console.log(job);
                draw_job(job);
            }
        });
    }
    catch (ex) {
        console.log(ex);
    }
}
var imagebase64 = "";
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        imagebase64 = reader.result;
    }
    reader.readAsDataURL(file);
} 
function submit_apply() {

    var id = $.urlParam('jobid');

    itm = {
        JobPostId: parseInt(id),
        FirstName: $("#fname").val(),
        LastName: $("#lname").val(),
        Birthdate: $("#date").val(),
        MaritalStatus: parseInt($("#MaritalStatus").children("option:selected").val()),
        MilitaryServiceStatus: parseInt($("#MilitaryServiceStatus").children("option:selected").val()),
        Email: $("#email").val(),
        PhoneNumber: $("#phone").val(),
        City: $("#city").val(),
        Area: $("#area").val(),
        ResumeFile: imagebase64
    };

    try {
        $.ajax({
            url: api,
            data: JSON.stringify(itm),
            type: "POST",
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                $('#career-modal').modal('toggle');
            },
            error: function (response) {
                console.log(response);
                $('#career-modal').modal('toggle');
            }
        });
    }
    catch (ex) {
        console.log(ex);
    }
}
function draw_job(job_item) {

    if (job_item[0].jobType == '1') {
        $('#expire').text('Experienced');
    }

    if (job_item[0].jobType == '2') {
        $('#expire').text('Management');
    }

    $('#title').text(job_item[0].title);



    if (job_item[0].commitmentType == '1') {
        $('#jobtype').text('Full Time');
    }

    if (job_item[0].commitmentType == '2') {
        $('#jobtype').text('Part Time');
    }

    if (job_item[0].commitmentType == '3') {
        $('#jobtype').html('Project');
    }

    if (job_item[0].commitmentType == '4') {
        $('#jobtype').text('Free lance');
    }

    if (job_item[0].location == '1') {
        $('#location').text('Cairo , Egypt');
    }

    if (job_item[0].location == '2') {
        $('#location').text('Agouza , Egypt');
    }

    
    $('#requirements').text(job_item[0].requirements);
    $('#description').text(job_item[0].description);
}
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
        .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}

