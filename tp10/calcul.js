function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;
    }


    function soustraction(){
        var a = document.getElementById("t1").value;
        var b = document.getElementById("t2").value;
        var c = Number(a) - Number(b);
        document.getElementById("resultat").value = c;
        }


        function multiplication(){
            var a = document.getElementById("t1").value;
            var b = document.getElementById("t2").value;
            var c = Number(a) * Number(b);
            document.getElementById("resultat").value = c;
            }



            function division() {
                var a = document.getElementById("t1").value;
                var b = document.getElementById("t2").value;
            
                if (Number(b) === 0) {
                    document.getElementById("resultat").value = "sa marche pas sa marche pas (tk78)";
                } else {
                    var c = Number(a) / Number(b);
                    document.getElementById("resultat").value = c;
                }
            }



                function parite()
                {
                    var x = document.getElementById("t1").value
                    if (x % 2 ==0){
                        document.getElementById("t3").value = " Paire "
                    }
                    else{
                        document.getElementById("t3").value = " Impaire "
                    }
                }



                document.getElementById('inputFieldId').value = '';




                function permute() {
                    var a = document.getElementById("t1").value;
                    var b = document.getElementById("t2").value;
                    document.getElementById("t1").value = b;
                    document.getElementById("t2").value = a;
                }

                function effacer() {
                    document.getElementById("t1").value = "";
                    document.getElementById("t2").value = "";
                    document.getElementById("t3").value = "";
                    document.getElementById("resultat").value = "";
                  }