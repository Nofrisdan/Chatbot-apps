function getHardResponse(pertanyaan) {
    let url = $("#chat-button").data("url");
    $.ajax({
        url:url,
        type:"POST",
        data:{
            "pertanyaan":pertanyaan
        },


        success:function(data){
            let botResponse = JSON.parse(data);
            // console.log(botResponse);
            if(botResponse.length == 1){
                let botHtml = '<p class="botText"><span>' + botResponse[0].jawaban + '</span></p>';
                $("#chatbox").append(botHtml);

                document.getElementById("chat-bar-bottom").scrollIntoView(true);
            }else if(botResponse.length > 1){
                  var responBot = `<p class="botText">
                <span >
                     Apakah Yang Anda Maksud :
                     <br>
                    <strong class="pertanyaan"></strong>
                     Silahkan mengirimkan salah satu pertanyaan diatas, jika pertanyaan diatas mewakili pertanyaan anda
                     
                </span>
  
                </p>`;

                $("#chatbox").append(responBot);

                // hitung jumlah kelas
                let kelas = document.getElementsByClassName("pertanyaan");
                let posisi = kelas.length - 1;

                // input pertanyaan
                  for(let i = 0; i < botResponse.length; i++){
                    let br = document.createElement("br");
                    
                    let elemen = botResponse[i].pertanyaan+"? ";

                    kelas[posisi].append(elemen);
                    kelas[posisi].appendChild(br);

                  }
                document.getElementById("chat-bar-bottom").scrollIntoView(true);

            }else{
                let respon = "Mohon Maaf Pertanyaan Anda Tidak Saya mengerti";
                let botHtml = '<p class="botText"><span>' + respon + '</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
            }
        }
    })

    
}