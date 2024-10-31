
const emekHaqqi = 600; 
let mebleg = 3000;
const ay = 16;


if (ay > 36) {
    const maksimalKredit = emekHaqqi * 10;
    if (mebleg > maksimalKredit) {
        console.error('Size bu şertlerle kredit düşmür');
        alert('Size bu şertlerle kredit düşmür');
    } else {
        
        const ayligLimit = emekHaqqi * 0.45;
        let faizDerecesi;
        
        if ( ay <= 12) {
            faizDerecesi = 0.13;
        } else if ( ay <= 24) {
            faizDerecesi = 0.15;
        } else {
            faizDerecesi = 0.17;
        }

        let toplamOdenis = mebleg * (1 + faizDerecesi);
        let ayligOdenis = toplamOdenis / ay ;

        if (ayligOdenis > ayligLimit) {
            console.error('Size bu şertlerle kredit düşmür');
            alert('Size bu şertlerle kredit düşmür');
        } else {
            
            let yekun = `${mebleg} AZN məbləği ${faizDerecesi * 100}% ilə ${ay} ay müddətinə aylıq ${ayligOdenis} manat ödənişlə verilir.`;
            alert(yekun);
        }
    }
}

  else { 
    console.error('Size bu şertlerle kredit düşmür');
        alert('Size bu şertlerle kredit düşmür'); }
    
   
