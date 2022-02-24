$(function(){

        $(".submit-btn").on("click",function(){
          let input = $("#keyword").val();
          let data = {
            apikey:"guest",
            keyword:input,
            format:'jsonp'

          }

        //ajaxの書き方
        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType:'jsonp',    //data type script・xmlDocument・jsonなど
            data:data,           //アクセスするときに必要なデータを記載。パラメータ。連想配列で渡す。    
          })

          .done(function(response) { 
             //通信成功時の処理
            //  console.log(response.item[0].name);
            console.log(response.item[0].image);
            let p = response.item[0].image
            console.log(p);
            $(".result").
             //要素名.append()メソッドを使用するとうまくできる。
             //成功したとき実行したいスクリプトを記載
          })

          .fail(function(xhr) {  
            //通信失敗時の処理
             //失敗したときに実行したいスクリプトを記載
          })

          .always(function(xhr, msg) { 
            //通信完了時の処理
            //結果に関わらず実行したいスクリプトを記載
       });   

        
    })

 




})