<script setup>
import BasisLayout from '../components/layouts/BasisLayout.vue'
import FooterBalk from '../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Lid worden"
        description="Wat leuk dat je overweegt lid te worden van C.S.V. Ichthus Utrecht! We maken graag kennis met je.">
        <div class="col-12 col-md-12 section-description">
            <div class="section-header">Kennismaken</div>
            <div class="post-text">
                <p>
                    Een Ichthusweek bestaat uit twee avonden. Op dinsdagavond is er kring, waarbij je samen met een vast
                    groepje een Bijbelstudie doet. Elke donderdagavond hebben we een verenigingsavond. Die start om
                    18:00
                    uur in Dijckzigt (Boorstraat 107) met een maaltijd. Na de maaltijd begint de activiteit. Dat kan van
                    alles zijn. Soms is het een lezing of een debat, soms spelen we spelletjes of hebben we een Praise &
                    Prayer. In de <router-link to="/agenda">agenda</router-link> kun je zien wanneer
                    welke activiteit
                    plaatsvindt. Je bent van harte welkom om een keer langs te komen.
                </p>
                <!--Hier staan de stukjes voor open kringavond-->
                <!--<p>
                    We organiseren ook een open avond, speciaal voor mensen die overwegen lid te worden. 
                    Tijdens die avond leggen we ook wat meer uit over wie wij zijn als vereniging en waar wij voor staan.
                </p>-->
                <!--<p>
                    Wil je weten hoe een kringavond eruitziet? Geef je dan op <a href="https://forms.gle/rGjgdTVnweetGKyaA">hier</a> 
                    voor de open kringavond. De deadline voor het aanmelden is zaterdag 17 juni.
                </p>-->
                <!--<p>
                    Tijdens de UIT-week, van 14 tot 17 augustus zijn wij van de partij. 
                    Tijdens deze week organiseren we meerdere activiteiten, daar kun je ook kennismaken met Ichthus. Kom je ook langs? 
                    Vergeet je dan niet op te geven voor de UIT via <a href="https://utrechtseintroductietijd.nl/">deze link</a>.
                </p>    -->
            </div>
        </div>

        <div class="col-12 col-md-12 section-description">
            <div class="section-header">Lidmaatschapsprocedure</div>
            <div class="post-text">
                <p>
                    Natuurlijk wil je zo snel mogelijk lid worden. Helaas kan dat pas in het nieuwe verenigingsjaar. We
                    vragen iedereen die interesse heeft om lid te worden om mee te doen aan onze introductieweek. Dat is
                    een
                    week waarin we elke avond een activiteit organiseren, om elkaar en de vereniging beter te leren
                    kennen.
                    Voor de introductieweek moet je je aanmelden in <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd4UTW4W6Y7wSZzoWE93wlxu2mSy4bjeFJ2n2vdTySq4nmmQg/viewform?usp=sf_link">het
                        formulier</a>.
                </p>
                <!--<p>
                    <a href="https://ichthusutrecht.churchbook.nl/public/join.cfm?kerk_id=1">Het aanmeldformulier voor Ichthus Utrecht</a> 
                    is nu open! Door dit formulier in te vullen, geef je aan dat je lid wilt worden.  Het bestuur zal daarna contact met je opnemen. 
                    Je hoeft geen ontgroening te doorgaan. En als je al zeker weet dat je lid wordt, houdt dan ook vooral het startweekend vrij! 
                    Dat is de beste manier om de leden te leren kennen en je Ichthuscarrière te beginnen. 
                </p>-->
                <p>
                    Belangrijke data op een rijtje:
                </p>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table" style="table-layout: fixed;">
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Gebeurtenis</th>
                    </tr>
                </thead>
                <tbody>
                    <!--<tr>
                            <td>20 juni 2023 </td>
                            <td>Open kringavond. Aanmelden kan via <a href="https://forms.gle/rGjgdTVnweetGKyaA">deze link</a> tot 17 juni.</td>
					</tr>-->
                    <!--<tr>
                            <td>22 juni 2023 </td>
                            <td>Open verenigingsavond. Aanmelden kan via <a href="https://forms.gle/P5yd4B4uvCyz8o587">deze link</a>.</td>
					</tr>-->
                    <tr>
                            <td>12–16 augustus 2023</td>
                            <td><a href="https://utrechtseintroductietijd.nl/">UIT-week</a></td>
					</tr>
                    <tr>
                        <td>9-12 september 2024</td>
                        <td><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4UTW4W6Y7wSZzoWE93wlxu2mSy4bjeFJ2n2vdTySq4nmmQg/viewform?usp=sf_link">
                            Introweek</a></td>
                    </tr>
                    <tr>
                        <td>11 september 2024</td>
                        <td><a>Aanmeldformulier C.S.V. Ichthus Utrecht</a> <!-- (gesloten) --></td>
                    </tr>
                    <tr>
                        <td>27-29 september 2024</td>
                        <td>Startweekend (aanvang verenigingsjaar)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-12 col-md-12 section-description">
            <div class="section-header">Vragen?</div>
            <div class="post-text">Heb je vragen? Aarzel niet om contact op te nemen via <a href="tel:+31642572029">06
                    42572029</a> (ook via WhatsApp) of <a
                    href="mailto:abactis@ichthusutrecht.nl">abactis@ichthusutrecht.nl</a></div>
        </div>
    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../assets/css/app.css';
</style>