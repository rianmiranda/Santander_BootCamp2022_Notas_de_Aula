const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const dogBtn = document.getElementById('change-dog');

const getDogs = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.message;
    }catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
	const dogImg = document.getElementById('dog');
    dogImg.src = await getDogs();
};

dogBtn.addEventListener('click', loadImg);

loadImg();

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// const getCats = async () => {
// 	try {
// 		const data = await fetch(BASE_URL);
// 		const json = await data.json();
// 		return json.webpurl;
// 	} catch (e) {
// 		console.log(e.message);
// 	}
// };

// const loadImg = async () => {
// 	const img = document.getElementsByTagName('img')[0];
// 	img.src = await getCats();
// };

// loadImg();

// const btn = document.getElementById('change-cat');
// btn.addEventListener('click', loadImg);