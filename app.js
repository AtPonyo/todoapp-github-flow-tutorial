$("#addTodo").click(function(){
    const inputTodo = $("input").val();
    $("#todolist").append("<li><input type='checkbox'>" + inputTodo + "</il>");

    $("input").val("");
});
