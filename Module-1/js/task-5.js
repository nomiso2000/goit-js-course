'use scrict';
let userCountry = prompt('В какую страну отправлять?');
if (userCountry !== null) {
  userCountry = userCountry.toLowerCase();
  switch (userCountry) {
    case 'китай':
      console.log(`Доставка в Китай будет стоить 100 кредитов`);
      break;
    case 'чили':
      console.log(`Доставка в Чили будет стоить 250 кредитов`);
      break;
    case 'австралия':
      console.log(`Доставка в Австрали  будет стоить 170 кредитов`);
      break;
    case 'индия':
      console.log(`Доставка в Индия будет стоить 80 кредитов`);
      break;
    case 'ямайка':
      console.log(`Доставка в Ямайка будет стоить 120 кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
} else {
  console.log('Пользователь отменил действие');
}
