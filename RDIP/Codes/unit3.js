
                var eng1 = ['John ate an apple before afternoon',
                            'before afternoon John ate an apple',
                            'John before afternoon ate an apple'];
                var eng2 = ['some students like to study in the night',
                            'at night some students like to study'];
                var eng3 = ['John and Mary went to church',
                                'Mary and John went to church'];
                var eng4 = ['John went to church after eating',
                                'after eating John went to church',
                                'John after eating went to church'];
                var eng5 = ['did he go to market',
                            'he did go to market'];
                var eng6 = ['the woman who called my sister sells cosmetics',
                            'the woman who sells cosmetics called my sister',
                            'my sister who sells cosmetics called the woman',
                            'my sister who called the woman sells cosmetics'];
                var eng7 = ['John goes to the library and studies',
                            'John studies and goes to the library'];
                var eng8 = ['John ate an apple so did she',
                            'she ate an apple so did John'];
                var eng9 = ['the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'she‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌'];
                var eng10 = ['I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌',
                            'I‌ ‌told‌ ‌her‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                            'yesterday‌ ‌I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                            'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌ ‌yesterday‌',
                            'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌',
                            'yesterday‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌'];
                var hin1 = ['राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
                            'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
                            'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                            'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌'];
                var hin2 = ['राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                            'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
                            'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
                            'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌'];
                var hin3 = ['मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                            'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                            'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                            'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                            'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                            'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                            'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                            'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                            'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                            'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                            'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                            'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌'];
                var hin4 = ['राम‌ ‌खाकर‌ ‌सोया‌',
                            'खाकर‌ ‌राम‌ ‌सोया‌',
                            'राम‌ ‌सोया‌ ‌खाकर‌',
                            'खाकर‌ ‌सोया‌ ‌राम‌',
                            'सोया‌ ‌राम‌ ‌खाकर‌',
                            'सोया‌ ‌खाकर‌ ‌राम‌'];
                var hin5 = ['बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
                            'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
                            'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                            'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                            'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
                            'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                            'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
                            'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌'];
                var hin6 = ['एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                            'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                            'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
                            'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब'];
                var hin7 = ['एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                            'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                            'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                            '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
                            'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                            'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
                            '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                            'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'];

function selclang()
{

     language = document.getElementById("langsel").value;

    if(language==='english')
    {
            document.getElementById("formedsent").innerHTML="";
            document.getElementById("choosenword").innerHTML ="";
            document.getElementById("reformsent").innerHTML = "";
            document.getElementById("checksent").innerHTML="";
            document.getElementById("correct").innerHTML="";
            document.getElementById("wrong").innerHTML="";
            document.getElementById("correctans").innerHTML="";
            allEnglish = [engl1,engl2,engl3,engl4,engl5,engl6,engl7,engl8,engl9,engl10];
            document.getElementById("introd").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
            document.getElementById("selectionintro").innerHTML="(select the buttons in proper order)";
            document.getElementById("introd").style.color="gray";
            document.getElementById("introd").style.fontSize="100%";
            document.getElementById("selectionintro").style.color="gray";
            randomEnglish = allEnglish[Math.floor(Math.random() * allEnglish.length)];
            randomEnglishSentence = randomEnglish[Math.floor(Math.random() * randomEnglish.length)];
            var randomsent=randomEnglishSentence.split(" ");
            var words=[];
            var i=0,j=0;
            while(randomsent.length>i)
            { j = Math.floor(Math.random() * randomsent.length);
                if(randomsent[j]!="no"){
                words[i]=randomsent[j];
                arrwords[j]="no";
                i++;
                }
        }
        else if(language==='hindi')
        {
                document.getElementById("formedsent").innerHTML="";
                document.getElementById("choosenword").innerHTML ="";
                document.getElementById("reformsent").innerHTML = "";
                document.getElementById("checksent").innerHTML="";
                document.getElementById("wordsjumble").innerHTML=" "
                document.getElementById("correct").innerHTML="";
                document.getElementById("wrong").innerHTML="";
                document.getElementById("correctans").innerHTML="";
                allHindi = [hin1,hin2,hin3,hin4,hin5,hin6,hin7];
                document.getElementById("introd").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
                document.getElementById("selectionintro").innerHTML="(select the buttons in proper order)";
                document.getElementById("introd").style.color="gray";
                document.getElementById("introd").style.fontSize="100%";
                document.getElementById("selectionintro").style.color="gray";
                randomHindi = allHindi[Math.floor(Math.random() * allHindi.length)];
                randomHindiSentence = randomHindi[Math.floor(Math.random() * randomHindi.length)];
                var randomsent=randomHindiSentence.split(" ");
                var words=[];
                var i=0,j=0;
                while(randomsent.length>i)
                { j = Math.floor(Math.random() * randomsent.length);
                    if(randomsent[j]!="no"){
                    words[i]=randomsent[j];
                    arrwords[j]="no";
                    i++;
                    }
            }
        else
        {
            document.getElementById("selectionintro").innerHTML="";
            document.getElementById("introd").innerHTML=
            document.getElementById("formedsent").innerHTML="";
            document.getElementById("choosenword").innerHTML ="";
            document.getElementById("reformsent").innerHTML = "";
            document.getElementById("checksent").innerHTML="";
            document.getElementById("wordsjumble").innerHTML=" "
            document.getElementById("correct").innerHTML="";
            document.getElementById("wrong").innerHTML="";
            document.getElementById("correctans").innerHTML="";
            alert("Select a language to continue");
        }
