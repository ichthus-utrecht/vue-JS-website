<!-- Footer -->
<template>
    <div class="w-100 footer">
        <x-containers.basic>
            <div class="col-div-non-xl"></div>
        </x-containers.basic>
        <x-containers.basic>
            <div class="row justify-content-center-padded">
                <!-- Column 1 -->
                <div class="col-10 col-md-4 footer-column">
                    <div class="footer-row">

                        <span class="page-section-header-s footer-caption">Volg ons: </span>

                        <a href="https://www.linkedin.com/organization-guest/company/c-s-v-ichthus-utrecht"
                            target="_blank" class="btn-social btn-sm btn-linkedin"><i class="fa fa-linkedin"></i></a>
                        <a href="https://nl-nl.facebook.com/csvichthusutrecht" target="_blank"
                            class="btn-social btn-sm btn-facebook"><i class="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/ichthus_utrecht/" target="_blank"
                            class="btn-social btn-sm btn-instagram"><i class="fa fa-instagram"></i></a>

                    </div>

                    <hr class="col-12" />
                    <div class="row">
                        <div class="col-12 post-text">
                            <strong>Contactpersoon</strong>
                            <p class="m-0">
                                Joëlle Meijer<br>
                                abactis@ichthusutrecht.nl<br>
                                +31 6 - 425 720 29
                            </p>
                        </div>
                    </div>
                    <hr class="col-12" />
                    <div class="row">
                        <div class="col-12">
                            <a class="text-dark text-decoration-none" href="/privacy">Privacy</a> | <a
                                class="text-dark text-decoration-none">Voorwaarden</a>
                            <!--href="/terms"     terms pagina nog niet uitgewerkt-->
                        </div>
                    </div>
                </div>
                <!-- Column 2 -->
                <div class="col-10 col-md-4 footer-column middle align-top">
                    <div class="row footer-row">
                        <div class="col-12 page-section-header-s footer-caption">Contactgegevens</div>
                    </div>
                    <hr class="col-12" />
                    <div class="row">
                        <div class="col-12 post-text">
                            <strong>Postadres</strong>
                            <p>
                                C.S.V. Ichthus Utrecht, Pnyx<br>
                                Winthontlaan 30C<br>
                                3526KV Utrecht<br>
                            </p>
                            <strong>Locatie</strong>
                            <p>
                                Boorstraat 107<br>
                                3513 SE Utrecht<br>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Column 3 -->
                <div class="col-10 col-md-4 footer-column align-top">
                    <div class="row footer-row">
                        <div class="col-12 page-section-header-s footer-caption">IBAN</div>
                    </div>
                    <hr class="col-12" />
                    <div class="row">
                        <div class="col-12 post-text">
                            <!--Nog nodig?
                                <strong>IBAN:</strong>
                            -->
                            <p>
                                NL 43 INGB 0000 1959 62<br>
                                t.n.v. Christelijke StudentenVereniging Ichthus Utrecht<br>
                            </p>
                            <!--Kan evt nog worden toegevoegd
                                <strong>ANBI:</strong>
                                <p>
                                    KvK nummer: 40483339<br>
                                    <a href="/Standaardformulier_publicatieplicht_ANBI_Algemeen_Ichthus_2022_2023.pdf">Klik
                                        hier voor het standaardformulier</a><br>
                                </p>
                            -->
                        </div>
                    </div>
                    <!--<div class="row footer-row">
                        <div class="col-12 page-section-header-s footer-caption">Meld je aan voor de nieuwsbrief</div>
                    </div>
                    <hr class="col-12"/>
                    <div class="row">
                        <form method="POST" action="{{ route('register') }}" class="col-12 footer-row">
                            @csrf
                            <div class="form-group row">
                                <div class="col-9 footer-form align-top">
                                    <input type="email" class="form-control footer-input" id="email" name="email"
                                           placeholder="E-mailadres">
                                </div>
                                <div class="col-3">
                                    <button type="submit" class="btn btn-ichthus">
                                        {{ __('Versturen') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div> -->
                    <hr class="col-12 divider-small divider-thin divider-gray" />
                    <div class="row">
                        <div class="col-12">
                            <img class="post-image no-shadow ml-0 mr-0 w-100"
                                src="@/assets/images/icons/ichthus-logo-gray.png" alt="">
                        </div>
                    </div>
                    <div class="row footer-copyright">
                        <div class="col-12 text-center pt-1">
                            {{ currentYear }} | Ichthus Utrecht | Webcie
                        </div>
                    </div>
                </div>
            </div>
        </x-containers.basic>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentYear: ''
        };
    },
    mounted() {
        // Update the currentYear data property with the current year when the component is mounted
        this.currentYear = new Date().getFullYear();
    }
};
</script>