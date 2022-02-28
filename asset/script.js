$(function(){

  // -------------------------------MIKU編集--------------------------------------------
    
  
  //loading
    // $(window).on('load',function(){
    // $("#splash").delay(1000).fadeOut('slow');
    // $("#splash_logo").delay(1000).fadeOut('slow');
    //  });
    

  var count = 0
  $('.bad').on('click',function(){

    // count = count+1
    count++

    if(count == 1){
    
    //header,footerにローソンの装飾を追加/FamilyMartの装飾を削除
    alert('そうですか。では、次回は是非他のお店を利用くださいませ(^-^)')
    $(".header_color_famima").addClass('header_color_loson');
    $(".famima").addClass('loson');
    $(".header_color2_famima").addClass('header_color2_loson');
    $(".footer_famima").addClass('footer_loson')
    $('div').removeClass("header_color_famima");
    $('div').removeClass("famima");
    $('div').removeClass("header_color2_famima");
    $('footer').removeClass("footer_famima");
    $('.staff').addClass('staff_come');

    }else if(count == 2){

    //セブンに変更
    alert('ローソンはお嫌いですか?')
    $(".change").addClass('header_color_seven');
    $(".change2").addClass('seven');
    $(".change3").addClass('header_color2_seven');
    $(".change4").addClass('footer_seven')
    $('div').removeClass("header_color_loson");
    $('div').removeClass("loson");
    $('div').removeClass("header_color2_loson");
    $('footer').removeClass("footer_loson");
    $('.staff').removeClass('staff_come');
    $('.nanako').addClass('nanako_walk');


    }else{
    //FamilyMartに戻す
    alert('おかえりなさい!あなたなら戻ってきてくれると信じてました!')
    $(".change").addClass('header_color_famima');
    $(".change2").addClass('famima');
    $(".change3").addClass('header_color2_famima');
    $(".change4").addClass('footer_famima')
    $('div').removeClass("header_color_seven");
    $('div').removeClass("seven");
    $('div').removeClass("header_color2_seven");
    $('footer').removeClass("footer_seven");
    $('.thank').addClass('thank_pyon');
    $('.nanako').removeClass('nanako_walk');
    $('.famitiki').addClass('famitiki_dance');
    }
  })

  $('.good').on('click',function(){

    //感謝
    $('.thank').toggleClass('thank_pyon');
    $('.famitiki').toggleClass('famitiki_dance');
  })

  // レジのscript
  $(".submitBtn").on("click", function () {
    let input = $("#keyword").val();
    let data = {
      "keyword":input,"apikey":"guest","format":"jsonp","max":1,"order":"r"
    }
    $.ajax({
      url: "https://sysbird.jp/toriko/api/",
      type: "get",
      cache: false,
      dataType: "jsonp",
      data: data,
    })
    .done(function (response) {
      //通信成功時の処理
      console.log(response);
      let maker=response.item.maker
      let name=response.item.name
      let price=response.item.price
      let img=response.item.image
      console.log(maker,name,img);
      $(".result").children("img").attr("src",img);
      $("#maker").text(maker);
      $("#name").text(name);
      $(".price").text(price);
    })
    .fail(function (xhr) {
      //通信失敗時の処理
      //失敗したときに実行したいスクリプトを記載
    })
    .always(function (xhr, msg) {
      //通信完了時の処理
      //結果に関わらず実行したいスクリプトを記載
    })
    $("#keyword").val("");
    // 画像の表示・非表示処理
    $(".first:nth-of-type(1)").fadeOut(1000);
    $(".first:nth-of-type(2)").fadeIn(1000);
  })
  $("#good").on("click",function(){
    $(".first:nth-of-type(2)").fadeOut(1000);
    $(".first:nth-of-type(3)").fadeIn(1000);
  })
  $("#bad").on("click",function(){
    $(".first:nth-of-type(2)").fadeOut(1000);
    $(".first:nth-of-type(1)").fadeIn(1000);
  })
  $("#back").on("click",function(){
    $(".first:nth-of-type(3)").fadeOut(1000);
    $(".first:nth-of-type(1)").fadeIn(1000);
  })
// --------------------------------------------------------------------------------

    //     $(".submit-btn").on("click",function(){
    //       let input = $("#keyword").val();
    //       let data = {
    //         apikey:"guest",
    //         keyword:input,
    //         format:'jsonp'
    //         order: r

    //       }

    //     //ajaxの書き方
    //     $.ajax({
    //         url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
    //         type: 'get', //post or get
    //         cache: false,        //cacheを使うか使わないかを設定
    //         dataType:'jsonp',    //data type script・xmlDocument・jsonなど
    //         data:data,           //アクセスするときに必要なデータを記載。パラメータ。連想配列で渡す。    
    //       })

    //       .done(function(response) { 
    //          //通信成功時の処理
    //         //  console.log(response.item[0].name);
    //         console.log(response.item[0].image);
    //         let p = response.item[0].image
    //         console.log(p);
    //         $(".result").
    //          //要素名.append()メソッドを使用するとうまくできる。
    //          //成功したとき実行したいスクリプトを記載
    //       })

    //       .fail(function(xhr) {  
    //         //通信失敗時の処理
    //          //失敗したときに実行したいスクリプトを記載
    //       })

    //       .always(function(xhr, msg) { 
    //         //通信完了時の処理
    //         //結果に関わらず実行したいスクリプトを記載
    //    });   

        
    // })

 




})