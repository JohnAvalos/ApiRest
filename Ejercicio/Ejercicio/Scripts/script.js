$(document).ready(function () {

    var urlActual = window.location;
    var splitUrlActual = urlActual.href.split("/");

    if (splitUrlActual[splitUrlActual.length - 1] == "StarWars") {
        get();
    }

    //sending the information through JSON

   
    //it call the information of a API REST
    function get() {
        $("#grid").empty();

        var limite = 0;
        var $grid = $("#grid");

        var $table = $("<table class='table table-striped table-hover'></table>");


        var $thead = $("<thead><tr></tr></thead>");
        $thead.append("<th>name</th>");
        $thead.append("<th>height</th>");
        $thead.append("<th>mass</th>");
        $thead.append("<th>hair_color</th>");
        $thead.append("<th>skin_color</th>");
        $thead.append("<th>eye_color</th>");
        $thead.append("<th>gender</th>");
        $thead.append("<th>homeworId</th>");

        $table.append($thead);

        $.ajax({
            dataType : "JSON",
            url: "/StarWars/JedaisData",
            type: "GET",
            success: function (data) {
                $results = data;
                var $tbody= $("<tbody></tbody>");
               $.each($results, function (idx, item) {
                   if (item.hair_color != "n/a") {
                       if ( limite < 5 ) {
                      
                        var $tr = $("<tr></tr>");
                        $tr.append("<td>" + item.name + "</td>");
                        $tr.append("<td>" + item.height + "</td>");
                        $tr.append("<td>" + item.mass + "</td>");
                        $tr.append("<td>" + item.hair_color + "</td>");
                        $tr.append("<td>" + item.skin_color + "</td>");
                        $tr.append("<td>" + item.eye_color + "</td>");
                        var gender = item.gender == "male" ? "<td><strong>" + item.gender + "</strong></td>" : "<td><i>" + item.gender + "</i></td>";
                        $tr.append(gender);
                        $tr.append("<td>" + item.homeworld + "</td>");

                        $tbody.append($tr);

                        limite++;
                       }
                    }

               })

                $table.append($tbody);

                $grid.append($table);
            },
            error: function (request, msg, error) {
                alert("Error");
            }
        });

    }

    var pintar = false;
    var currentRow = $("#grid");
    $("body").on("click", "#pintar", function () {
       
        if (pintar == false) {
            currentRow.find("tr:eq(1)").css("background", "#ffff0038"); // get current row 1st TD value
            currentRow.find("tr:eq(2)").css("background", "#ffff0038"); // get current row 2st TD value
            currentRow.find("tr:eq(3)").css("background", "#ffff0038"); // get current row 3st TD value

            $("#pintar").text("Despintar");
         
        } else {
            currentRow.find("tr:eq(1)").css("background", "none"); // get current row 1st TD value
            currentRow.find("tr:eq(2)").css("background", "none"); // get current row 2st TD value
            currentRow.find("tr:eq(3)").css("background", "none"); // get current row 3st TD value
            $("#pintar").text("pintar");

        }
        pintar = !pintar;

    });
});