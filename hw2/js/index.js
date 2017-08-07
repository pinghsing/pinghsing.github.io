$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("https://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})

function showitem(value){
    $img=$('<img>').attr('class','thumb').attr('src',value.image);
    $title=$('<h3>').attr('class','title').html(value.name);
    $price=$('<p>').attr('class','price').html("NT$ "+value.price);
    $item=$('<div>').attr('class','item').append($img).append($title).append($price);
    $col=$('<div>').attr('class','col-*').append($item);
    $('#product-list').append($col);
}

$('#query').on('click', function() {
    $.get("https://js2017-hw2.kchen.club/query", function(response) {
        if (response) {
            if (response.result) {
                // TODO HW2 作業寫在這裡
                var data=response.data;
                data.forEach(showitem);
            } else {
                $('#message').text('查詢失敗 (' + response.data + ')');
                $('#dialog').modal('show');
            }
        } else {
            $('#message').text('查詢失敗');
            $('#dialog').modal('show');
        }
        console.log(response);
    }, "json");
})