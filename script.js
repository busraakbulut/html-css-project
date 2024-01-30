const cityNames = [
 'Adana',
 'Adıyaman',
 'Afyonkarahisar',
 'Ağrı',
 'Amasya',
 'Ankara',
 'Antalya',
 'Artvin',
 'Aydın',
 'Balıkesir',
 'Bilecik',
 'Bingöl',
 'Bitlis',
 'Bolu',
 'Burdur',
 'Bursa',
 'Çanakkale',
 'Çankırı',
 'Çorum',
 'Denizli',
 'Diyarbakır',
 'Edirne',
 'Elazığ',
 'Erzincan',
 'Erzurum',
 'Eskişehir',
 'Gaziantep',
 'Giresun',
 'Gümüşhane',
 'Hakkâri',
 'Hatay',
 'Isparta',
 'İçel (Mersin)',
 'İstanbul',
 'İzmir',
 'Kars',
 'Kastamonu',
 'Kayseri',
 'Kırklareli',
 'Kırşehir',
 'Kocaeli',
 'Konya',
 'Kütahya',
 'Malatya',
 'Manisa',
 'Kahramanmaraş',
 'Mardin',
 'Muğla',
 'Muş',
 'Nevşehir',
 'Niğde',
 'Ordu',
 'Rize',
 'Sakarya',
 'Samsun',
 'Siirt',
 'Sinop',
 'Sivas',
 'Tekirdağ',
 'Tokat',
 'Trabzon',
 'Tunceli',
 'Şanlıurfa',
 'Uşak',
 'Van',
 'Yozgat',
 'Zonguldak',
 'Aksaray',
 'Bayburt',
 'Karaman',
 'Kırıkkale',
 'Batman',
 'Şırnak',
 'Bartın',
 'Ardahan',
 'Iğdır',
 'Yalova',
 'Karabük',
 'Kilis',
 'Osmaniye',
 'Düzce',
];

function search() {
 const input = document.getElementById('search');
 const inputValue = input.value.trim().toLowerCase();
 const autocompleteResults = document.getElementById('autocomplete-results');

 autocompleteResults.innerHTML = '';

 if (inputValue === '') {
  return;
 }

 const matchingCities = cityNames.filter((city) =>
  city
   .toLowerCase()
   .split(' ')
   .every((word) => word.startsWith(inputValue))
 );

 if (matchingCities.length === 0) {
  return;
 }

 matchingCities.forEach((city) => {
  const suggestion = document.createElement('div');
  suggestion.textContent = city;
  suggestion.classList.add('autocomplete-suggestion');
  suggestion.addEventListener('click', () => {
   input.value = city;
   autocompleteResults.innerHTML = '';
  });
  autocompleteResults.appendChild(suggestion);
 });
}
