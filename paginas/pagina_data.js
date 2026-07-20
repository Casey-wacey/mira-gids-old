function getUrlParameterByName(name) {
        const url = new URLSearchParams(window.location.search);
        return url.get(name);
    }
document.addEventListener("DOMContentLoaded", function() {
    data = [
        {
        titel: "Introductie Pater Pieraerts",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        ExtraextraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Welkom",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Slingerproef van Foucault",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Zeiss-lenzenkijker KMS",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Interactieve sterrenkaart",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Foto Tarantulanevel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Optische banken",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Radiometeoren",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Radioactiviteit",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Geschiedenis heelal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Zonnestelsel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Kometen en meteoren",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Nakhla-meteoriet",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Sterevolutie",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Kosmologie",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Afmetingen heelal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Slingerbeweging",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Afstand vs. Lichttijd",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Afstand vs. Lichttijd",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Weegschaal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Galileo Galilei",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Zonnestelsel als pannenkoek",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Sterren als zandkorrels",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Afstanden meten in het heelal",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Met de bus naar de Zon",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Zwart gat - uitleg 1",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Zwart gat - uitleg 2",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Snelheden en bewegingen",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Wandschildering zonnestelsel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Wereldbol",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Lichthinder",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Seizoenen",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "ISS",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Ruimtevaart",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Methodes exoplaneten",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Digitaal weerstation",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Ruimtevaart",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Maan",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Heliostaat (binnengedeelte)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Lego-maquette SDO",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Lichtbreking",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Kleurenwiel en RGB-spots",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Spiegels",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Spectroscopie",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Dwarsdoorsnede Zon",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Plasmabol",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Statisch planetarium",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Exoplaneten",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Waarnemingsterras",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Pater Pieraerts-koepel",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Geacclim. telescoopruimte",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="lin" id="afbeelding">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Heliostaat (buitengedeelte)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Armillairsfeer (deel 1)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Armillairsfeer (deel 2)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Weerkast (linkerkant)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Weerkast (rechterkant)",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Grondthermometers",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Pluviometer oud",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Pluviograaf",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Pluviometer",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Kleine thermometerhut",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Grote thermometerhut",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "450mm Obsession Dobson",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "400mm Meade ACF",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Lego-maquette MIRA",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Valversnelling vacuum",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Hellend vlak",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Behoud impulsmoment",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Wieg van Newton",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Waterbeertjes",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Arecibo-maquette",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Molecules / Vgl. van Drake",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    },
    {
        titel: "Proba-2 maquette",
        algemeen: "uitleg algemeen",
        afbeelding: '<img src="media/fotos/placeholder.jpg" alt="foto" id="afbeelding" class="fotoPagina">',
        extra: "extra uitleg",
        video: '<video controls id="video" src="media/videos/placeholder.mp4"></video> <br>',
        audioTekst: "audio",
        extraAudio: '<source src="media/audio/placeholder.mp3">'
    }
    ];
    
    let nummer = getUrlParameterByName('nummer');
    if (data[nummer].titel) {
        document.getElementById("pagetitel").innerHTML = data[nummer].titel;
    }
    if (data[nummer].titel) {
        document.getElementById("titel").innerHTML = data[nummer].titel;
    }
    if (data[nummer].algemeen) {
        document.getElementById("algemeen").innerHTML = data[nummer].algemeen;
    }
    if (data[nummer].afbeelding) {
        document.getElementById("afbeelding").innerHTML = data[nummer].afbeelding;
    }
    if (data[nummer].extra) {
        document.getElementById("extra").innerHTML = data[nummer].extra;
    }
    if (data[nummer].video) {
        document.getElementById("video").innerHTML = data[nummer].video;
    }
    if (data[nummer].audioTekst) {
        document.getElementById("audioTekst").innerHTML = data[nummer].audioTekst;
    }
    document.getElementById("audio").innerHTML = '<audio controls id="audio" src="media/audio/N' + nummer +'.mp3"></audio> <br>'
    if (data[nummer].extraAudio) {
        document.getElementById("extraAudio").innerHTML = data[nummer].extraAudio;
    }
})
