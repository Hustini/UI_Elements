document.addEventListener('DOMContentLoaded', function () {
    let languageContent = {
        "en": "The sun was slowly setting as Anna walked through the" +
            "picturesque park. The colorful leaves rustled beneath her" +
            "shoes as she pondered over her thoughts. The scent of fresh" +
            "autumn air filled the atmosphere, and the silence was only broken" +
            "by the chirping of birds. Anna felt a deep sense of tranquility" +
            "rising within her and enjoyed this moment of serenity.",
        "de": "Die Sonne ging langsam unter, als Anna durch den" +
            "malerischen Park spazierte. Die bunten Blätter raschelten unter" +
            "ihren Schuhen, während sie über ihre Gedanken nachdachte. Der" +
            "Duft von frischer Herbstluft lag in der Luft, und die Stille" +
            "wurde nur vom Gezwitscher der Vögel durchbrochen. Anna fühlte eine" +
            "tiefe Ruhe in sich aufkommen und genoss diesen Moment der Gelassenheit."
    }

    let german = document.getElementById('german');
    let english = document.getElementById('english');
    let text = document.getElementById('text');

    german.addEventListener('click', function () {
        console.log('German clicked');
        text.innerText = languageContent['de'];
    });

    english.addEventListener('click', function () {
        console.log('English clicked');
        text.innerText = languageContent['en'];
    });

})