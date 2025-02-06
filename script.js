// script.js

const answers = {
    1: 'B',
    2: 'C',
    3: 'C',
    4: 'A',
    5: 'C',
    6: 'B',
    7: 'C',
    8: 'C',
    9: 'B',
    10: 'B',
    11: 'A',
    12: 'B',
    13: 'B',
    14: 'C',
    15: 'B',
    16: 'B',
    17: 'C',
    18: 'B',
    19: 'C',
    20: 'B',
    21: 'B',
    22: 'B',
    23: 'C',
    24: 'B',
    25: 'B',
    26: 'B',
    27: 'B',
    28: 'A',
    29: 'B',
    30: 'B'
};

let correctCount = 0; // Aantal juiste antwoorden
let incorrectCount = 0; // Aantal foute antwoorden
const questionCount = Object.keys(answers).length; // Totaal aantal vragen

function getExplanation(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "De belangrijkste taak van een objectbeveiliger is het beveiligen van één specifiek object, zoals een gebouw of terrein.";
        case 2:
            return "Objectbeveiligers werken meestal variabele uren, afhankelijk van de behoeften van de klant en het type object dat wordt beveiligd.";
        case 3:
            return "Een belangrijke taak van een complexbeveiliger is het controleren van identiteitsbewijzen van bezoekers om de veiligheid te waarborgen.";
        case 4:
            return "Om evenementbeveiliger te worden, is een diploma Beveiliger van de SVPB of een gelijkwaardige kwalificatie vereist.";
        case 5:
            return "Persoonsbeveiligers beschermen individuen tegen directe bedreigingen en zijn vaak werkzaam in hoogrisicosituaties.";
        case 6:
            return "De hoofdtaken van de politie zijn het handhaven van de openbare orde, het verlenen van hulp en het opsporen van strafbare feiten.";
        case 7:
            return "Een algemeen opsporingsambtenaar kan alle strafbare feiten opsporen, terwijl een boa beperkte bevoegdheden heeft.";
        case 8:
            return "Een parkeercontroleur is een voorbeeld van een buitengewone opsporingsambtenaar (boa).";
        case 9:
            return "Een evenementenbeveiliger is verantwoordelijk voor toegangscontrole en crowd control om de veiligheid tijdens evenementen te waarborgen.";
        case 10:
            return "Een mobiel surveillant heeft goede communicatieve vaardigheden en kennis van alarmsystemen nodig om effectief te kunnen werken.";
        case 11:
            return "De Nederlandse brandweer valt onder de verantwoordelijkheid van het gemeentebestuur.";
        case 12:
            return "De bevelvoerder bij de brandweer geeft leiding aan de brandweermensen tijdens een inzet.";
        case 13:
            return "De brandweer in Nederland heeft ongeveer 30.000 medewerkers.";
        case 14:
            return "De Koninklijke Marechaussee is verantwoordelijk voor taken zoals grenspolitie, terrorismebestrijding en het tegengaan van drugssmokkel.";
        case 15:
            return "Een brandwacht houdt toezicht op brandveiligheid en voorkomt brandrisico's.";
        case 16:
            return "Het alarmnummer 112 wordt gebeld bij noodsituaties zoals brand of levensbedreigende situaties.";
        case 17:
            return "Crowdcontrol bij evenementenbeveiliging houdt in dat de orde binnen de menigte wordt gehandhaafd.";
        case 18:
            return "Discretie is een belangrijke eigenschap voor een persoonsbeveiliger, omdat zij vaak met vertrouwelijke informatie werken.";
        case 19:
            return "Een voetbalsteward heeft een specifiek certificaat nodig om zijn taken uit te voeren.";
        case 20:
            return "De hoofdfunctie van een ambulanceverpleegkundige is het verlenen van medische zorg aan patiënten.";
        case 21:
            return "Om complexbeveiliger te worden, moet je minimaal 18 jaar oud zijn.";
        case 22:
            return "De officier van dienst is verantwoordelijk voor de coördinatie van verschillende bevelvoerders bij grote branden.";
        case 23:
            return "Een A1-rit is een type vervoer dat door ambulancediensten wordt uitgevoerd voor spoedeisende medische hulp.";
        case 24:
            return "De ISPS-code bevat veiligheidsvoorschriften voor zeeschepen en havens om terroristische dreigingen te voorkomen.";
        case 25:
            return "Een ambulancechauffeur is verantwoordelijk voor het veilig vervoeren van de ambulance en de patiënt.";
        case 26:
            return "De hoofdtaken van de politie zijn het handhaven van de openbare orde, het verlenen van hulp en het opsporen van strafbare feiten.";
        case 27:
            return "Een mobiel surveillant heeft goede communicatieve vaardigheden en kennis van alarmsystemen nodig.";
        case 28:
            return "De Nederlandse brandweer valt onder de verantwoordelijkheid van het gemeentebestuur.";
        case 29:
            return "De hoofdfunctie van een ambulanceverpleegkundige is het verlenen van medische zorg aan patiënten.";
        case 30:
            return "Discretie is een belangrijke eigenschap voor een persoonsbeveiliger, omdat zij vaak met vertrouwelijke informatie werken.";
        default:
            return "Geen uitleg beschikbaar voor deze vraag.";
    }
}

// Cevabı kontrol etme fonksiyonu
function checkAnswer(questionNumber, selectedAnswer, clickedButton) {
    const resultDiv = document.getElementById(`result${questionNumber}`);
    const numberDiv = document.querySelector(`#numberContainer .number:nth-child(${questionNumber})`);

    const buttons = clickedButton.parentElement.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.remove('selected');
        if (button !== clickedButton) {
            button.classList.add('fade');
        }
    });

    clickedButton.classList.add('selected');
    const correctAnswer = answers[questionNumber];

    // Arka plan rengi sınıflarını uygulayın
    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = `<div class="true-result">Correct! ${getExplanation(questionNumber)}</div>`;
        correctCount++;
        numberDiv.classList.add('correct-solved'); // Doğru cevap için sınıf
    } else {
        resultDiv.innerHTML = `<div class="false-result">Fout! Het juiste antwoord is ${correctAnswer}. <br> Verklaring: ${getExplanation(questionNumber)}</div>`;
        incorrectCount++;
        numberDiv.classList.add('incorrect-solved'); // Yanlış cevap için sınıf
    }

    // Çözülen sorunun stilini güncelleyin
    numberDiv.classList.add('solved');

    displayScore();
}

// Score gösterme fonksiyonu
function displayScore() {
    const scoreDiv = document.getElementById('score');
    const totalScore = (correctCount / questionCount) * 10;
    scoreDiv.innerHTML = `Je score is ${correctCount} van de ${questionCount} vragen. <br> Foute antwoorden: ${incorrectCount}. <br> Totale score: ${totalScore.toFixed(1)} /10 `;
    displayNumbers();
}

function navigateToQuestion(index) {
    console.log(`Navigating to question ${index}`); // Debugging için
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.style.display = (i === index) ? 'block' : 'none';
    });
    // Scroll naar de geselecteerde vraag
    questions[index].scrollIntoView({ behavior: "smooth" });
}

// Numara görüntüleme fonksiyonu
function displayNumbers() {
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.innerHTML = '';

    for (let i = 1; i <= questionCount; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.innerText = i;

        // Numaraya tıklama olayını ekle
        numberDiv.addEventListener('click', (e) => {
            console.log(`Number ${i} clicked`);  // Tıklama olayını kontrol etmek için
            const questions = document.querySelectorAll('.question');
            questions.forEach((q, index) => {
                q.style.display = (index + 1 === i) ? 'block' : 'none';
            });
            // Soruya kaydırma
            const questionElement = document.querySelector(`.question:nth-child(${i})`);
            if (questionElement) questionElement.scrollIntoView({ behavior: "smooth" });
        });

        // Çözülen sorular için stil ekle
        if (document.getElementById(`result${i}`).innerHTML !== '') {
            numberDiv.classList.add('solved');
        }

        numberContainer.appendChild(numberDiv);
    }
}

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
});

// Tüm soruları gösterme fonksiyonu
function showAllQuestions() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'block'; // Tüm soruları göstermek için stil ayarı
    });
}

// Yan paneli açıp kapayan fonksiyon
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show'); // 'show' sınıfını ekle veya kaldır
}

// Event listener ekleme
document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
document.getElementById('showAllQuestions').addEventListener('click', showAllQuestions);

// Dark mode toggle
document.getElementById('toggleButton').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Buton metnini güncelle
    const isDarkMode = body.classList.contains('dark-mode');
    document.getElementById('toggleButton').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
    // Vragenlijst butonuna tıklama olayı ekleniyor
    document.querySelector('#vragenlijst').addEventListener('click', () => {
        console.log('Vragenlijst tuşuna tıklanmış'); // Konsol çıktısı
        showAllQuestions(); // Tüm soruları göster
    });
});