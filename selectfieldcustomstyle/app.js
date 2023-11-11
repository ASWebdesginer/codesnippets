jQuery(document).ready(function($){
    var selectbox=$("#contactformmi").find("select").find("option");
   var output="<div class='selectnewbox'> <ul>";
    selectbox.each(function(){
        output += `<li id="${$(this).attr("value")}"> ${$(this).text()}</li>`;
    }) ;
   output += "</ul></div>";
   $("#contactformmi").find("select").after(output);

   
   $("#contactformmi").on("click",".selectnewbox li",function(){
       $(this).closest(".selectnewbox").siblings("select").val($(this).attr("id"));
       $(this).closest(".selectnewbox").hide();
       $(this).closest(".selectnewbox").siblings("select").removeAttr("disabled");
   });
   $("#contactformmi").find("select").on("click",function(e){
       e.preventDefault();
       $(this).attr("disabled","disabled");
       $(this).siblings(".selectnewbox").show();
   })
});