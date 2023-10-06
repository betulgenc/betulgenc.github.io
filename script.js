// Kız arkadaşınızın adını JavaScript'te tanımlayın
const girlfriendName = "Betül";

// Kız arkadaşınızın doğum tarihi (YYYY, MM, DD formatında)
const girlfriendBirthday = new Date('2000-10-09');

// Kız arkadaşınızın adını HTML içinde kullanın
document.getElementById('girlfriendName').innerText = girlfriendName;
document.getElementById('girlfriendName2').innerText = girlfriendName;
document.getElementById('girlfriendName3').innerText = girlfriendName;

// Yaş hesaplama
const today = new Date();
const ageInMilliseconds = today - girlfriendBirthday;

// Bir yıldaki milisaniye sayısı
const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;

// Yaşı milisaniye cinsinden hesaplayın
const ageInYears = ageInMilliseconds / millisecondsPerYear;

// Yaşı tam yıl ve gün olarak ayırın
const years = Math.floor(ageInYears);
const days = Math.floor((ageInYears - years) * 365.25);

// Yaşı HTML'e ekleyin
document.getElementById('currentAge').innerText = `${years}`;

// Yaşadığı gün sayısı hesaplama
const daysLived = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
document.getElementById('daysLived').innerText = daysLived;

// Geri sayım hesaplama
const nextBirthday = new Date(today.getFullYear(), girlfriendBirthday.getMonth(), girlfriendBirthday.getDate());
if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}
const timeUntilBirthday = nextBirthday - today;

// Geri sayımı HTML'e ekleyin
const countdown = document.getElementById('countdown');

if (timeUntilBirthday === 0) {
    countdown.innerText = 'Bugün ' + girlfriendName + ' doğum günü!';
} else {
    const days = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));

    countdown.innerText = `${days} gün, ${hours} saat, ${minutes} dakika`;
}
