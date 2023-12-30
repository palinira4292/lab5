const ukrainianToLatinMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh',
    'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
    'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu', 'я': 'ya',
};

function transliterate() {
    const ukrainianText = document.getElementById('ukrainianText').value;
    const transliteratedText = ukrainianText.split('').map(char => {
        if (ukrainianToLatinMap[char.toLowerCase()]) {
            return ukrainianToLatinMap[char.toLowerCase()];
        } else {
            return char;
        }
    }).join('');
    document.getElementById('transliteratedText').value = transliteratedText;}