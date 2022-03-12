        /*
        1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
            AA 90-100
            BA 85-89
            BB 80-84
            CB 75-79
            CC 70-74
            DC 65-69
            DD 60-64
            FD 50-59
            FF 0-49
        2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
        3- ff bilgisine uzgun surat cikar cikar, gigerlerinde gulucuk olsun
        */

        let sinavSonuc = prompt("Sınav Sonucunuzu Giriniz")
        let notBilgisi;
        if (sinavSonuc > 0 && sinavSonuc <=100) {
                if (sinavSonuc >= 90) {
                    notBilgisi = "AA"
                } else if (sinavSonuc >= 85) {
                    notBilgisi = "BA"
                } else if (sinavSonuc >= 80) {
                    notBilgisi = "BB"
                } else if (sinavSonuc >= 75) {
                    notBilgisi = "CB"
                } else if (sinavSonuc >= 70) {
                    notBilgisi = "CC"
                } else if (sinavSonuc >= 65) {
                    notBilgisi = "DC"
                } else if (sinavSonuc >= 60) {
                    notBilgisi = "DD"
                } else if (sinavSonuc >= 50) {
                    notBilgisi = "FD"
                } else if (sinavSonuc < 50) {
                    notBilgisi = "FF"
                }

                if (sinavSonuc >= 50) {
                    console.log("Not aralığı: " + notBilgisi + " / Tebrikler sınavı geçtiniz :)")
                }else if (sinavSonuc < 50) {
                    console.log("Not aralığı: " + notBilgisi + " / Daha çok çalışmalısınız :(")
                }
        }
