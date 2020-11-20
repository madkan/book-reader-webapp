// start and stop reading only ONE book at a time
var reading=false;
$(document).ready(function(){
    $('#stop1').prop('disabled',true);
    $('#stop2').prop('disabled',true);
    $('#stop3').prop('disabled',true);
});

$(document).on('click','#start1',function(){
    $('#start1').prop('disabled',true);
    $('#stop1').prop('disabled',false);
    $('#start2').prop('disabled',true);
    $('#start3').prop('disabled',true);
    console.log('button pressed');
    var username=$('#user').text();
    console.log(username);
    $.ajax(
    {
        method: "POST",
        url: "/start",
        data: {
            username: username,
            bookname:'wuthering heights',
            timestamp:'tstamp'
        }
    });
});

$(document).on('click','#stop1',function(){
    $('#start1').prop('disabled',false);
    $('#start2').prop('disabled',false);
    $('#start3').prop('disabled',false);
    $('#stop1').prop('disabled',true);
    console.log('stop pressed');
    var username=$('#user').text();
    $.ajax(
    {
        method: "POST",
        url: "/stop",
        data: {
            username: username,
            bookname:'the happy prince and other stories',
            timestamp:'tstamp'
        }
    });
});

$(document).on('click','#start2',function(){
    $('#start2').prop('disabled',true);
    $('#stop2').prop('disabled',false);
    $('#start1').prop('disabled',true);
    $('#start3').prop('disabled',true);
    console.log('start pressed');
    var username=$('#user').text();
    console.log(username);
    $.ajax(
    {
        method: "POST",
        url: "/start",
        data: {
            username: username,
            bookname:'swami and friends',
            timestamp:'tstamp'
        }
    });
});

$(document).on('click','#stop2',function(){
    $('#start1').prop('disabled',false);
    $('#start2').prop('disabled',false);
    $('#start3').prop('disabled',false);
    $('#stop2').prop('disabled',true);
    console.log('stop pressed');
    var username=$('#user').text();
    $.ajax(
    {
        method: "POST",
        url: "/stop",
        data: {
            username: username,
            bookname:'the happy prince and other stories',
            timestamp:'tstamp'
        }
    });
});

$(document).on('click','#start3',function(){
    $('#start3').prop('disabled',true);
    $('#stop3').prop('disabled',false);
    $('#start2').prop('disabled',true);
    $('#start1').prop('disabled',true);
    console.log('start pressed');
    var username=$('#user').text();
    console.log(username);
    $.ajax(
    {
        method: "POST",
        url: "/start",
        data: {
            username: username,
            bookname:'the happy prince and other stories',
            timestamp:'tstamp'
        }
    });
});

$(document).on('click','#stop3',function(){
    $('#start1').prop('disabled',false);
    $('#start2').prop('disabled',false);
    $('#start3').prop('disabled',false);
    $('#stop1').prop('disabled',true);
    console.log('stop pressed');
    var username=$('#user').text();
    $.ajax(
    {
        method: "POST",
        url: "/stop",
        data: {
            username: username,
            bookname:'the happy prince and other stories',
            timestamp:'tstamp'
        }
    });
});
