var api = 'https://zeinamvc.azurewebsites.net/ZeinaAPI';
var career_lst;
$(function () {
    get_careers();
    console.log(career_lst);
});
function get_careers() {
    try {
        $.ajax({
            url: api,
            type: "GET",
            async: false,
            dataType: "json",
            success: function (response) {
                career_lst = response
                draw_careers(career_lst);
            }
        });
    }
    catch (ex) {
        console.log(ex);
    }
}
function draw_careers(lst) {

    var html = '';

    if (lst !== null && lst.length > 0) {

        $.each(lst, function (idx, itm) {



            if (itm.isActive == true)
            {

                html += '<div class="col-md-6 wow fadeInUp">';
                html += '<div class="job">';
                html += '    <a href="job-details.html?jobid=' + itm.id + '">';
                html += '        <div>';
                html += '            <div class="title">';
                html += '                <h2>' + itm.title + '</h2>';

                if (itm.jobType == '1') {
                    html += '                <p>Experienced</p>';
                }

                if (itm.jobType == '2') {
                    html += '                <p>Management</p>';
                }

                html += '            </div>';
                html += '            <ul class="specs">';
                html += '                <li>';
                html += '                    <span>' + itm.requirements + '</span>';
                html += '                </li>';
                html += '            </ul>';
                html += '            <div class="desc">';
                html += '                <p>' + itm.description + '</p>';
                html += '            </div>';
                html += '        </div>';
                html += '    </a>';
                html += '    <ul class="info">';
                html += '        <li>';
                html += '            <img src="img/careers/employment.png">';

                if (itm.commitmentType == '1') {
                    html += '                <span>Full Time</span>';
                }

                if (itm.commitmentType == '2') {
                    html += '                <span>Part Time</span>';
                }

                if (itm.commitmentType == '3') {
                    html += '                <span>Project</span>';
                }

                if (itm.commitmentType == '4') {
                    html += '                <span>Free lance</span>';
                }

                html += '                </li>';
                html += '            <li>';
                html += '                <img src="img/careers/location.png">';

                if (itm.location == '1') {
                    html += '                    <span>Cairo , Egypt</span>';
                }

                if (itm.location == '2') {
                    html += '                    <span>Agouza , Egypt</span>';
                }

                html += '                </li>';
                html += '                <li>';
                html += '                    <img src="img/careers/date.png">';
                html += '                        <span>Opening</span>';
                html += '                </li>';
                html += '            </ul>';
                html += '        </div>';
                html += '    </div>';

            }


        });

        $('#career-list').append(html);
    }
}