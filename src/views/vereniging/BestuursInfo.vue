<script setup>
import BestuursPersoon from '../../components/details/BestuursPersoon.vue'
import BasisLayout from '../../components/layouts/BasisLayout.vue'
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Bestuur der C.S.V. Ichthus Utrecht"
        description="Zoals elke studentenvereniging heeft ook Ichthus Utrecht een bestuur! Onderstaand stellen zij zich aan jou voor.">
        <div class="row justify-content-center">
            <BestuursPersoon imageNumber="1" name="Mirte van den Berg" function="Praeses" email="praeses@ichthusutrecht.nl">
                <p>Mijn naam is Mirte en dit jaar ben ik de Praeses van Ichthus Utrecht. Vanuit deze rol mag ik de
                    vereniging en het bestuur leiden op de ALV’s en bv’s. Ook zal ik vooruit kijken naar wat er gaat komen
                    en daarbij ons beleid in de gaten houden.</p>
                <p>Bij mijn studie voor docent Nederlandse Gebarentaal, combineer ik mijn enthousiasme om mensen nieuwe
                    dingen te leren en mijn liefde voor de Nederlandse Gebarentaal. In mijn vrije tijd kan ik genieten van
                    een goed boek, muziek en creativiteit. Zo leer ik mezelf naaien, haken en maak linosnedes. Waar ik
                    energie van krijg? Boulderen en een goed kopje koffie. Dus klop gerust aan voor een van de twee of de
                    combinatie!</p>
            </BestuursPersoon>
            <BestuursPersoon imageNumber="2" name="Joëlle Meijer" function="Ab Actis" email="abactis@ichthusutrecht.nl">
                <p>Hi, mijn naam is Joëlle en ik ben de Ab actis van onze vereniging. Dat houdt in dat ik alle post en mailtjes mag afhandelen en onze leden verjaardagskaartjes mag sturen. Daarnaast ben ik ook verantwoordelijk voor de notulen van de Algemene Ledenvergaderingen, de ledenadministratie en het op orde houden van het archief. Dus ik ben zowel het interne als externe aanspreekpunt van de vereniging. Naast Ichthus ben ik bezig met het afronden van mijn Bachelor English Language and Culture. Oftewel, ik ben altijd wel met een goed Engels boek te vinden of bezig met zelf gedichten schrijven. Verder houd ik ook erg van een potje volleybal en geniet ik van muziek luisteren, films of series kijken, met vrienden afspreken, een diepzinnig gesprek voeren tot diep in de nacht en zo veel knuffels geven dat je denkt “nu is het wel weer genoeg”.</p>   
            </BestuursPersoon>
            <BestuursPersoon imageNumber="3" name="Nathan Bouwman" function="Fiscus" email="fiscus@ichthusutrecht.nl">
                Hey! Ik ben Nathan en dit jaar ben ik de Fiscus van Ichthus Utrecht, jaja de man met het grote geld. Dit
                jaar hou ik de regie en het overzicht over de financiën van Ichthus. Naast mijn bestuurstaken leg ik dit
                jaar de laatste hand aan mijn bachelor Biologie aan de UU. Om van al die drukte bij te komen ben ik ook onze
                plaatselijke kampvuurgitarist en ben ik een grote puzzelaar.
            </BestuursPersoon>
            <BestuursPersoon imageNumber="4" name="Rhodé Lodewijks" function="Assessor Intern" email="assessor.intern@ichthusutrecht.nl">
                <p>Hoi! Mijn naam is Rhodé en dit jaar mag ik de rol van Assessor Intern van Ichthus Utrecht vervullen. Ik houd me daarom bezig met alles wat met de kringen te maken heeft. Ondertussen probeer ik mijn bachelor Sociale geografie en planologie af te ronden en geniet ik van mijn bijbaantje in het middelbaar onderwijs. Om daarnaast nog wat te ontspannen zit ik het liefst achter de piano of in goed gezelschap met een cappuccino of een droog wit wijntje in de hand. </p>
            </BestuursPersoon>
            <BestuursPersoon imageNumber="5" name="Inge van de Bruinhorst" function="Assessor Extern" email="assessor.extern@ichthusutrecht.nl">
                <p>Heyhey, mijn naam is Inge, inmiddels alweer vijfdejaars Ichthiaan en ik mag dit jaar de prachtige functie van Assessor Extern vervullen. Dit houdt onder andere in dat ik Ichthus Utrecht vertegenwoordig binnen onze externe verbanden zoals Ichthus Landelijk, BOCS en IFES. Naast de tijd die ik in Ichthus steek, hoop ik komend jaar nog een paar vakken te volgen van mijn master Franse taal en cultuur: educatie en communicatie om na mijn bestuursjaar aan de slag te kunnen als docent Frans. In het dagelijks leven vind ik het leuk om te koken, maak ik graag tijd vrij voor een potje squashen of een rondje hardlopen en laad ik lekker op door een avondje bankhangen en film kijken met mijn huisgenootjes. Ook kan ik erg genieten van heerlijk kletsen met mensen onder het genot van een kop koffie of een wijntje dus weet me daar vooral voor te vinden!</p>
            </BestuursPersoon>
            <BestuursPersoon imageNumber="6" name="Maaike de Vries" function="Herus" email="herus@ichthusutrecht.nl">
                <p>Heyy, ik ben Maaike en ik ben de Herus van Ichthus Utrecht. Dat houdt zoal in dat ik mag nadenken over het zoeken van een pand en geld binnen mag halen van externe bedrijven. Ik ben nu bezig met mijn laatste jaar van mijn bachelor Informatica aan de Universiteit Utrecht. Daarnaast lees ik erg graag, vooral fantasyboeken en probeer ik ook wat tijd bij elkaar te zoeken om piano te spelen. Maar het grootste gedeelte besteed ik toch wel met praten. En dat kan over alles zijn: van een diepgaand gesprek over het leven of een interessant onderwerp tot eindeloos doorpraten over eigenlijk helemaal niks. Als het gaat om praten weet ik vaak van geen ophouden. Dus spreek me vooral aan als je zin hebt in een gesprek.</p>
            </BestuursPersoon>
        </div>
    </BasisLayout>
    <FooterBalk />
</template>
