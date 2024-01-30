const request = require('request');
const token = process.env.token; // زي العادة توكن بسيركيت يا بشر

   
const payload = {

      'content': '> # ** ksmk  ksmk  ksmk  ksmk  انيك في قطر انيكها نيك في المطر يا ولد الشرموطة انيك امك في مصر و احطي بطيزها الرمان انيك امك في عمان ة زبي عليها طار يا ولد الحرام انيك كسمك بالاشجار و كسها صار نار و شرار كس امك ماله فرار يا ولد الجرار المتناك من زبي انيك عرضك ابن القحبة كسختك يا اب الشراميط امك على و بي ولك انيك امك ابن الحرام كس امك على كس اختك على كس ستك ولك انيج سلالتك كلهم ديوثين و قحاب و شراميط انيج امك بزبوب افريقية و اخليها على زبي هندية يا ولد الفنانة الي تلعب بوش اوب على زبي حيحانة يا ولد الجبانة انيك كسمك بالفصول و كسها صار كله فضول يا ولد الزنا انيك كسمك يا ابن الحرتم كسختك على عيري تنام يا ولد الشراميط افتح كسمك هيك و هيك افتح كس امك با الموس و اصير لكس امك كابوس يا ولد المومس الي تناك في تونس يا ولد القحاب نكت كس امك و مالها فرار يا ولد الجرار سويت لكسمك اعدام يا ابن الحرام انيك كس امك في الافلام و اسوي لكسها اعدام انيك امك في المواقع و ادحش بطيزها الرمان انيك امك في الواقع و كسها لزبي نابض افتح كسمك يا ولد المومس انيك كسمك يا ولد الحرام كس اختك على كس امك على كس ستك كلهم انيجهم يا ولد زبي كلهم مكانهم فوق زبي يا ولد زبي انيك كس امك ابن القحبة كس امك انحط على الحجر ة كسها انفجر يا ولد الشرموطة كسمك يا ولد المجنونة على عيري ممحونة ة منيوكة يا ولد شفة نكت كس امك و حشيت زبي با فمها يا ولد المدام كسمك يصير له اعدام منفذ الاعدام هوو زبي الجبار يا ولد الجرار بس قلي من ويل كسمك الفرار يا ولد الحرام اليوم مكتوب لكسمك النيك المؤبد يا ولد الزنا افتح كسمك و اقذف به المنويات اجلخ على كسمك الحيوانات المنوية لكي تصبح حاملة بابن شرموطة نفسك و انيج بكسه يا ولد القحبة انيك كسمك و اطفي بكسها الزجارة يا ولد الامورة على عيري ممحونة افتح كسمك ابن الشراميط انيك امك هيك و هيك و حتى بكل الوضعيات امك ناجوها مليون سجين و حطوا بطيزها عير يا ولد المكين فتحت كسمك و سويت له رنين انيك كسمك ابن الشرموطة على عيري منيوكة يا ولد القحاب كسختك على كسمك يا ولد زوبري افتح كس امك بالسين و اسفرها الصين يا ولد المناكيح ادحش بطيزها سيف يقطع كسها يا ولد زبي اطب كس امك بالارض اشلع و اقلع كس امك يا ولد الحرام كسمك صار كله دمان و منويات<@973998317191172158>'
};

const header = {

      'Authorization': token

};

const groupIds = ["1187713107070562365"]; 
let currentGroupIndex = 0;

function sendRequest() {
      const currentGroupId = groupIds[currentGroupIndex];
        
        request.post(`https://discord.com/api/v9/channels/${currentGroupId}/messages?limit=50`, {
                headers: header,
                    json: payload
}, (error, response, body) => {
        if (error) {
                  console.error(error);
                        return;
        }
            
            if (response.statusCode >= 4000 && response.statusCode < 4000) {
                      console.error(`Received ${response.statusCode} error. Trying again later.`);
                            const retryInterval = 5000; 
                                  setTimeout(sendRequest, retryInterval);
                                        return;
            }
                
                console.log(body);
                    
                    const intervalBetweenGroups = 500;
                        
                        const intervalAfterMessage = 500;
                            
                            currentGroupIndex = (currentGroupIndex + 1) % groupIds.length;
                                
                                setTimeout(sendRequest, intervalBetweenGroups);
        });
    }

    sendRequest();

    const express = require("express");
    const app = express();

    app.listen(() => console.log("I'm Ready To nik ksm iblis..! 24H"));
    app.get('/', (req, res) => {
          res.send(`
            <body>
              <center><h1>كسمك ابليس  </h1></center
                </body>`);
    });

    setInterval(function() {
          var now = new Date();
            console.log(now.toLocaleTimeString());
    }, 10000);
    
    })
    })
            }
        }
}
        })
}
}
}