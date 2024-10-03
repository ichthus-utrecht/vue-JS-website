<script setup lang="ts">
import BestuursPersoon from "../../components/details/BestuursPersoon.vue";
import BasisLayout from "../../components/layouts/BasisLayout.vue";
import FooterBalk from "../../components/interactief/FooterBalk.vue";
import NavigatieBalk from "@/components/interactief/NavigatieBalk.vue";
</script>

<template>
  <NavigatieBalk />
  <BasisLayout
    pageHeader="Bestuur der C.S.V. Ichthus Utrecht"
    description="Zoals elke studentenvereniging heeft ook Ichthus Utrecht een bestuur! Onderstaand stellen zij zich aan jou voor."
  >
    <div class="row justify-content-center">
      <BestuursPersoon
        imageNumber="1"
        name="Henrik Bout"
        function="Praeses"
        email="praeses@ichthusutrecht.nl"
      >
        <p>
          Hoi! Ik ben Henrik en ben dit jaar Praeses van Ichthus Utrecht. Dat
          betekent dat ik voorzitter ben en leiding geef aan het bestuur. Verder
          mag ik ook de ALV's voorzitten en ga ik over de planning.
        </p>
        <p>
          Ik studeer Business IT & Management in Amsterdam, maar aangezien mijn
          afstudeerstage niet te combineren is met een bestuursjaar heb ik die
          studie even op pauze gezet, daardoor heb ik tijd voor mijn andere
          hobby, namelijk geschiedenis! Komend jaar begin ik dan ook met de
          studie geschiedenis in Utrecht. Naast geschiedenis hou ik ook erg van
          voetbal een goed bakje koffie en een lekker pilsemannetje.
        </p>
      </BestuursPersoon>
      <BestuursPersoon
        imageNumber="2"
        name="Alieke Kunst"
        function="Ab Actis"
        email="abactis@ichthusutrecht.nl"
      >
        <p>
          Heyhoi! Ik ben Alieke en dit jaar ben ik de Ab Actis van onze
          prachtige vereniging. Als Ab Actis ben ik het aanspreekpunt van de
          vereniging. Ik mag dus alle mailtjes beantwoorden en kaartjes
          versturen! Verder draag ik zorg over de notulen van de vergaderingen
          en houd ik de ledenadministratie bij.
        </p>
        <p>
          Afgelopen jaar heb ik de bachelor Pedagogische Wetenschappen afgerond.
          Nu mag ik in mijn tussenjaar even genieten van Ichthus en haar mooie
          leden. Daarnaast ben ik altijd in voor een potje volleybal (vooral
          leuk met Ichthianen), verslind ik puzzelboekjes alsof mijn leven ervan
          af hangt en ben ik altijd in voor een goed gesprek met een kopje thee!
        </p>
      </BestuursPersoon>
      <BestuursPersoon
        imageNumber="3"
        name="Thijs Scherrenburg"
        function="Fiscus"
        email="fiscus@ichthusutrecht.nl"
      >
        <p>
          Hoi! Ik ben Thijs en mag dit jaar de prachtige rol van Fiscus gaan
          vervullen :) Dit houdt in dat ik me bezig mag houden met alles wat te
          maken heeft met het fiscaat en het beheren van de schatkist. Hier
          komen o.a. het verwerken van declaraties, de maandelijkse incasso en
          het maken van de begroting bij kijken.
        </p>
        <p>
          Dit jaar zal ik mijn studie Bestuurs- en Organisatiewetenschap even op
          pauze zetten, zodat ik me volledig kan focussen op mijn bestuurstaken,
          op het dienen van de vereniging. Ik houd ervan om me te verdiepen in
          politieke kwesties (gelukkig maar, anders zou mijn studie veel minder
          leuk zijn…). Daarnaast lees ik graag een boek, houd ik van wielrennen,
          of trek ik mijn hardloopschoenen aan! Ook ben ik wel in voor een goed
          gesprek en een kopje koffie.
        </p>
      </BestuursPersoon>
      <BestuursPersoon
        imageNumber="4"
        name="Samuel van Wonderen"
        function="Assessor Intern"
        email="assessor.intern@ichthusutrecht.nl"
      >
        <p>
          Sjalom, sjalom! Mijn naam is Samuel en ik ben dit jaar de Assessor
          Intern, oftewel de kringencoördinator! Overigens betekent dit ook dat
          ik de commissies aanstuur voor de geestelijke activiteiten en
          openingen mag doen met overdenkingen over de Bijbel en de relatie met
          God. In de tussentijd ben ik bezig om mijn master thesis af te
          schrijven, wat vaak inhoudt, als echte computer scientist, code
          schrijven en testen om 1 uur 's nachts. Verder heb ik een grote,
          recreatieve passie voor Hebreeuws en hou ik ervan om in m'n vrije tijd
          naar de sportschool te gaan of te gaan boulderen of te volleyballen,
          en ik hou ook heel erg van samen films en series kijken. Dus ben je
          een keer bij onze maaltijd, ik ben zeer te spreken over films,
          Hebreeuws, en ik "heb voor niets anders tijd over dan om iets nieuws
          te zeggen of te horen" over de Bijbel; dus spreek me vooral een keer
          aan! Lehietraoot!
        </p>
      </BestuursPersoon>
      <BestuursPersoon
        imageNumber="5"
        name="Timo van der Laan"
        function="Assessor Extern"
        email="assessor.extern@ichthusutrecht.nl"
      >
        <p>Hey!</p>
        <p>
          Mijn naam is Timo en komend jaar vervul ik de taak van Assessor Extern
          binnen Ichthus Utrecht. Zo vertegenwoordig ik onze vereniging binnen
          het Ichthus Landelijk verband, IFES en de verbanden binnen Utrecht met
          name BOCS. Naast mijn bestuurstaken werk ik bij een wijnwinkel waar ik
          veel leuke dingen leer en ook veel lekkers mag proeven. Dit sluit dan
          ook nauw aan bij mijn voorliefde voor koken en lekker eten. Als ik
          niet met bestuur of werk bezig ben, loop of zwem ik graag en rondje.
          Daarnaast kan ik ook erg genieten van een spelletjesavond met m’n
          huisgenoten en een goede kop koffie.
        </p>
      </BestuursPersoon>
      <BestuursPersoon
        imageNumber="6"
        name="Alinde van Manen"
        function="Herus"
        email="herus@ichthusutrecht.nl"
      >
        <p>
          Ciao! Even voorstellen: Ik ben Alinde en ik ben de Herus van Ichthus
          Utrecht en die titel draag ik met veel trots! In mijn functie houd ik
          mij vooral bezig met sponsoren werven, locaties regelen & beheren en
          zoek ik natuurlijk naar een eigen pand! Naast mijn functie als Herus
          ben ik twee daagjes in de week werkzaam bij EventRent als marketing-en
          projectmanager en rond ik mijn studie eventmanagement af. Naast al
          deze zakelijke dingen hou ik enorm van koken en bakken en klets ik het
          liefst tot in de late avonduurtjes met een cocktail in de hand, dit
          alles doe ik het liefst in het buitenland want reizen is het liefste
          dat ik doe! Dus heb je een keer zin om te babbelen? Schiet me vooral
          aan bij de maaltijd!
        </p>
      </BestuursPersoon>
    </div>
  </BasisLayout>
  <FooterBalk />
</template>