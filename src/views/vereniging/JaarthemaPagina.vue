<script setup lang="ts">
import BasisLayout from '../../components/layouts/BasisLayout.vue'
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Jaarthema"
        description="Dit jaar heeft het bestuur gekozen voor het jaarthema “Sprong in het diepe”.">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 post-text">
                Dit jaar wagen we samen een sprong in het diepe! Geloven in een seculiere samenleving, 
                nieuwe verantwoordelijkheden opnemen, keuzes maken over je toekomst, er zijn allerlei dingen 
                in je studentenleven die spannend of onzeker kunnen zijn. Samen willen we die uitdagingen 
                vol vertrouwen en samen met God aangaan.
            </div>
            <div class="col-12 col-md-10 post-text">
                Als <b>C.S.V. Ichthus Utrecht</b> vormen we een plek van eenheid, vriendschap en kookkunst, maar ook van ontmoeting, 
                studentikoziteit en dienstbaarheid. Ichthus is een plek waar je wordt uitgedaagd en meer leert over 
                God, jezelf en de wereld om je heen. Vanuit het jaarthema 'Sprong in het diepe' werken we dit jaar aan drie speerpunten:
            </div>

            <div class="row align-items-center">
                <!-- <div class="col-12 col-md-5">
                    <img class="post-image no-shadow p-4" src="https://www.ichthusutrecht.nl/images/bestuur-logo-2022.png" alt="" />
                </div> -->
                <div class="col-12 col-md-10 post-text-block">
                    <p>
                        <b>Vertrouwen:</b> Om de sprong te durven wagen is vertrouwen belangrijk. Daarom willen we een plek zijn 
                        waar leden zich veilig en vertrouwd voelen, liefdevol met elkaar omgaan en zich vol enthousiasme inzetten. 
                        Daarbinnen staan openheid en transparantie centraal en worden we uitgedaagd om ieder onze unieke talenten tot uiting te brengen.
                    </p>
                    <p>
                        <b>Verbinding:</b> Een gemeenschap van christelijke studenten is niet vanzelfsprekend in onze steeds meer polariserende samenleving. 
                        Daarom willen we de eenheid in onze verscheidenheid zoeken en staat verbinding centraal: met elkaar, met nieuwe leden en ook buiten de vereniging.
                    </p>
                    <p>
                        <b>Verdieping:</b> Ons fundament is Jezus Christus. Gods liefde wordt bij onze vereniging zichtbaar in hoe wij deze liefde uitdelen 
                        naar de mensen om ons heen. Kringen spelen hierin bij Ichthus een centrale rol, net als themaweken, verdiepende weekenden en andere momenten van ontmoeting. 
                        We willen groeien in onze relatie met God en ons door Hem laten leiden, in vertrouwen dat Hij erbij is.
                    </p>
                </div>
            </div>

            <div class="col-12 col-md-10 post-text">
                We hopen dat Ichthus dit jaar een plek vol vertrouwen, verbinding en verdieping mag zijn en kijken uit naar een spetterend jaar. Plons!
                <div class="post-text-quote" style="color: #3b82c6; font-size: 18px">
                    “Moet je door het water gaan – Ik ben bij je; of door rivieren – je wordt niet meegesleurd. 
                    Moet je door het vuur gaan – het zal je niet verteren, de vlammen zullen je niet verschroeien. 
                    Want Ik, de HEER, ben je God, de Heilige van Israël, je redder.” — Jesaja 43:2-3a (NBV21)
                </div>
            </div>
        </div>
    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';
</style>