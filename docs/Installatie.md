# Installatie

> [!NOTE]
> Het is aan te raden om basiskennis te hebben van een terminal/command prompt en bestandspaden voordat je aan deze installatie begint. Zie de [nuttige links](#nuttige-links) voor tutorials.

1. **Installeer Visual Studio Code (VS Code)**
   - Windows/Mac: [download VS Code](https://code.visualstudio.com/download)
   - Ubuntu: [installatiehandleiding voor Ubuntu](https://linuxcapable.com/install-visual-studio-code-on-ubuntu-linux/)

2. **Installeer de VS Code-extensies**
   - **Vue (official)**
   - **HTML CSS Support**

   Weet je niet hoe dat moet? Zie [extensies installeren in VS Code](https://code.visualstudio.com/docs/configure/extensions/extensions).

3. **Installeer Node.js (versie 22 of nieuwer)**
   - Windows: [download Node.js](https://nodejs.org/en/download) (kies de LTS-versie)
   - Mac (met [Homebrew](#1-download-git)):
     ```bash
     brew install node
     ```
   - Ubuntu:
     ```bash
     sudo apt update
     sudo apt install -y nodejs npm
     ```

   Controleer daarna met `node -v` dat je v22 of hoger hebt. Het project is getest met v22.9.0 (zie `.nvmrc`).

4. **Stel Git en GitHub in**

   Volg alle stappen onder [Git en GitHub instellen](#git-en-github-instellen) en ga daarna hier verder.

5. **Clone de repository van de site**

   ```bash
   git clone git@github.com:ichthus-utrecht/vue-JS-website.git
   ```

   Krijg je de vraag `Are you sure you want to continue connecting (yes/no)?`, typ dan `yes` en druk op <kbd>Enter</kbd>. Dit gebeurt alleen de eerste keer.

6. **Open de map in VS Code**

   Kies in VS Code **File** > **Open Folder...** en selecteer de map `vue-JS-website`. Open daarna de ingebouwde terminal met **Terminal** > **New Terminal**; die staat dan meteen in de goede map.

   Werk je liever in een losse terminal, ga dan naar de map met:

   ```bash
   cd vue-JS-website
   ```

7. **Installeer de afhankelijkheden en start de testserver**

   ```bash
   npm install --include=dev
   npm run dev
   ```

   `npm install` is alleen de eerste keer nodig, en opnieuw als na een `git pull` het bestand `package.json` is veranderd. Daarna is `npm run dev` genoeg.

8. **Bekijk de site**

   Klik op de localhost-link in de terminal om de site in je browser te openen. Stoppen doe je met <kbd>Ctrl</kbd> + <kbd>C</kbd>.

> [!IMPORTANT]
> Lees [Werken met branches](#werken-met-branches-stap-voor-stap) voordat je iets aan de site aanpast.

Waar je wat kunt vinden en hoe je de meest voorkomende aanpassingen doet, staat in het [overzicht van de website](WebsiteAanpassen.md).

# Nuttige links

- [Hoe installeer je VS Code-extensies](https://code.visualstudio.com/docs/configure/extensions/extensions)
- [Bestandspaden uitgelegd](https://dev.to/code_2/understanding-computer-file-paths-a-professional-tutorial-21g0) (basisvaardigheid)
- [Basistutorial command prompt (Windows)](https://wingeek.org/how-to-use-command-prompt-windows-for-beginners/)
- [Basistutorial terminal (Linux/Mac)](https://linuxvox.com/blog/terminal-ubuntu/)

# GitHub

## Git en GitHub instellen

De installatie is op alle besturingssystemen grotendeels hetzelfde. Om GitHub te gebruiken is Git nodig.

### 0. GitHub-account en toegang

Je hebt een GitHub-account nodig. [Maak er een aan](https://github.com/signup) als je die nog niet hebt.

Om de site te mogen aanpassen, moet je toegang hebben tot de repository `ichthus-utrecht/vue-JS-website`. Als het goed is heeft de WebCie-voorzitter je al toegevoegd of om je GitHub-gebruikersnaam gevraagd. Is dat niet zo, stuur dan je gebruikersnaam naar de voorzitter. Accepteer daarna de uitnodiging die je per mail of op GitHub krijgt.

### 1. Download Git

- Windows: [download Git voor Windows](https://git-scm.com/install/windows)
- Mac:
  ```bash
  brew install git
  ```
  Dit gebruikt Homebrew. Installeer Homebrew met het volgende commando:
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Ubuntu:
  ```bash
  sudo apt install git
  ```

### 2. SSH-sleutel aanmaken voor git (Windows/Mac/Linux)

Om vanuit VS Code wijzigingen aan de git-repository toe te voegen, moeten we ons apparaat toegang geven tot ons account. Dit gebeurt met SSH-sleutels. Dit moet je apart doen voor elk apparaat waarop je wilt werken.

1. Open de terminal/command prompt/powershell
2. Voer het volgende commando in:

   ```bash
   ssh-keygen -t ed25519
   ```

3. Druk 3 keer op <kbd>Enter</kbd>
   - Er hoeft geen wachtwoord te worden aangemaakt.
4. Zoek de publieke sleutel op:
   - **Windows**: Persoonlijke map (`C:\Users\<jouw-naam>`) > `.ssh` > `id_ed25519.pub`  
     Of weergeven in PowerShell met:

     ```powershell
     Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
     ```

   - **Mac**: `~/.ssh/id_ed25519.pub`. Finder verbergt deze map; tonen kan met <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd>  
     Makkelijker is dit commando, dat de sleutel direct op je klembord zet:

     ```bash
     pbcopy < ~/.ssh/id_ed25519.pub
     ```

   - **Ubuntu**: `~/.ssh/id_ed25519.pub`  
     Weergeven met:

     ```bash
     cat ~/.ssh/id_ed25519.pub
     ```

5. Kopieer deze sleutel (volledig, inclusief de naam en alles)
6. Ga naar GitHub > **Settings** > **SSH and GPG keys** > **New SSH key**
7. Voeg de gekopieerde sleutel toe als SSH-sleutel.
8. Test of het werkt:

   ```bash
   ssh -T git@github.com
   ```

   - De eerste keer krijg je de vraag `Are you sure you want to continue connecting (yes/no)?`. Typ `yes` en druk op <kbd>Enter</kbd>.
   - Zie je `Hi <jouw-naam>! You've successfully authenticated...`, dan is alles goed ingesteld. Krijg je een foutmelding, kijk dan bij [Probleemoplossing](#probleemoplossing).

### 3. Git configureren

Om wijzigingen aan een GitHub-repository toe te voegen, moet Git je naam en e-mailadres kennen. Deze stel je in de Git-configuratie in met de volgende terminal/command prompt-commando's:

```bash
git config --global user.name "jouw volledige naam"
git config --global user.email "jouw@mailadres.nl"
```

Klaar? Ga terug naar [stap 5 van de installatie](#installatie) om de repository te clonen.

## Git-werkwijze

> [!WARNING]
> Push nooit rechtstreeks naar `master`. Werk altijd in je eigen branch en maak een pull request.
> `master` is beveiligd: een directe push wordt door GitHub geweigerd. Krijg je zo'n foutmelding, dan zit je waarschijnlijk nog op `master`. Maak dan een nieuwe branch met `git switch -c <naam>` (je wijzigingen gaan mee) en push die.

Git is een versiebeheersysteem. Het werkt met een online en een offline/lokale versie. De online versie kan worden bekeken en bewerkt door iedereen met toegang tot de repository (de map-met-versies). De basiswerkwijze is als volgt:

1. Je kopieert de online map naar je eigen apparaat (met `git clone`)
2. Je maakt een eigen **branch** aan voor je wijzigingen (met `git switch -c <naam>`)
3. Je maakt wijzigingen in de map (je bewerkt de code)
4. Je test de code en zorgt dat de site nog werkt (testserver)
5. Als je bewerkte code de tests doorstaat, leg je de wijzigingen vast in een nieuwe, verbeterde versie (met `git commit`). Deze nieuwe versie bestaat nog alleen op je eigen apparaat.
6. Je zet je branch online (met `git push`) en maakt op GitHub een **pull request**. De eerste paar keer kijkt een ervaren WebCie-lid je wijzigingen na voordat ze op de site komen. Als je wat meer ervaring hebt, mag je kleine tekstuele aanpassingen zelf mergen.

Hoe je dit precies doet, staat bij [Werken met branches: stap voor stap](#werken-met-branches-stap-voor-stap). Hieronder lees je waarom we met branches werken.

### Conflicten

Een probleem met de ideale werkwijze hierboven is dat meerdere mensen tegelijk aan dezelfde code werken. Nadat jij de nieuwste versie van de site hebt gekopieerd en vrolijk een verbeterde versie aan het maken bent, heeft een collega ook de nieuwste versie gekopieerd en maakt die zijn eigen verbeterde versie. Als je collega sneller is, is de site waarin jij wijzigingen hebt gemaakt anders dan de site waaraan jij je wijzigingen wilt toevoegen.

Soms kan Git dit zelf oplossen. Dit heet **fast-forward**. Sommige problemen kan Git echter niet oplossen. Dit heet een **merge conflict**. Bij een merge conflict moet je Git handmatig vertellen welke wijzigingen geaccepteerd en welke afgewezen moeten worden. Stel dat jij code hebt verbeterd, terwijl je collega die code in de nieuwste versie van de site helemaal heeft verwijderd. Dan moet je Git vertellen of de nieuwe, verbeterde code moet worden overgenomen of dat de code verwijderd moet blijven.

Dit is een relatief lastig proces, dat meestal wordt gedaan door iemand met kennis van Git. Daarom maakt meestal iedereen een eigen **branch**: een kopie van de sitemap/repository met al hun verbeteringen aan de site. Als ze klaar zijn, maken ze een **pull request** aan. Iemand anders kijkt de verbeteringen in de branch dan na en verwerkt ze in de nieuwere versie van de site (via fast-forward of door de merge conflicts op te lossen). Dit is ook de manier waarop wij werken.

## Werken met branches: stap voor stap

Je kunt alles hieronder doen met knoppen in VS Code of met commando's in de terminal. Allebei werkt; kies wat je prettig vindt.

### Met VS Code (aanbevolen)

> [!TIP]
> Je hoeft de Git-commando's niet uit je hoofd te kennen. VS Code heeft een ingebouwd **Source Control**-paneel waarmee je alles met knoppen kunt doen. Voor de meeste mensen is dit de makkelijkste manier.

1. **Haal de nieuwste versie op.** Zorg dat je op `master` zit (de branchnaam staat linksonder in de blauwe statusbalk) en klik op het ronde pijltjes-icoon naast de branchnaam om te synchroniseren.
2. **Maak een nieuwe branch.** Klik linksonder op de branchnaam en kies **Create new branch...**. Geef een korte naam die zegt wat je gaat doen, bijvoorbeeld `update-bestuurspagina`.
3. **Maak je wijzigingen** en test ze met de testserver (`npm run dev`).
4. **Open het Source Control-paneel** via het vertakkings-icoon in de linkerbalk, of met <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>. Hier zie je alle bestanden die je hebt veranderd. Klik op een bestand om precies te zien wat er anders is.
5. **Selecteer je wijzigingen** door op het **+** naast een bestand te klikken (of naast **Changes** voor alles tegelijk). Dit is hetzelfde als `git add`.
6. **Commit.** Typ bovenin een bericht dat samenvat wat je hebt gedaan en klik op **Commit**.
7. **Push.** De eerste keer staat er een knop **Publish Branch**; daarmee zet je je branch op GitHub. Bij latere commits heet de knop **Sync Changes**.
8. **Maak een pull request.** Ga naar de repository op GitHub. Daar verschijnt een gele balk met de knop **Compare & pull request**. Klik erop, beschrijf kort wat je hebt veranderd en klik op **Create pull request**.

### Met de terminal

```bash
git switch master                                # ga naar de hoofdbranch
git pull                                         # haal de nieuwste versie op
git switch -c update-bestuurspagina              # maak een nieuwe branch en ga erheen

# ... maak je wijzigingen en test ze ...

git status                                       # bekijk welke bestanden veranderd zijn
git add .                                        # selecteer alle wijzigingen
git commit -m "Nieuwe bestuursfoto's toegevoegd" # leg ze vast
git push -u origin update-bestuurspagina         # zet je branch de eerste keer op GitHub
```

Bij latere commits op dezelfde branch is een gewone `git push` genoeg. Maak daarna op GitHub een pull request, zoals in stap 8 hierboven.

### Handige Git-commando's (in terminal/command prompt)

| Commando                             | Wat het doet                                                                                                                                         |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git clone <github-repo-link>`       | Kopieert de nieuwste versie van de site van GitHub naar je computer.                                                                                 |
| `git status`                         | Laat zien op welke branch je zit en welke bestanden je hebt veranderd.                                                                               |
| `git diff`                           | Laat precies zien wat je hebt veranderd sinds de laatste commit.                                                                                     |
| `git pull`                           | Haalt de nieuwste wijzigingen uit de GitHub-versie van de site binnen in je lokale versie.                                                           |
| `git add .`                          | Selecteert alle wijzigingen die in de volgende commit moeten komen. Gebruik `git add <bestand>` om alleen één bestand te selecteren.                 |
| `git commit -m "bericht"`            | Maakt een nieuwe lokale versie van de site met de geselecteerde wijzigingen. Het bericht wordt opgeslagen in git en moet de wijzigingen samenvatten. |
| `git push`                           | Zet de nieuwste lokale versie online op GitHub. Dit wordt afgebroken als er een merge conflict is.                                                   |
| `git push -u origin <branch-naam>`   | Zet een nieuwe branch voor het eerst op GitHub. Daarna is `git push` genoeg.                                                                         |
| `git switch <branch-naam>`           | Wisselt van je huidige branch naar een andere bestaande branch.                                                                                      |
| `git switch -c <nieuwe-branch-naam>` | Maakt een nieuwe branch aan en wisselt naar deze branch.                                                                                             |
| `git stash`                          | Slaat alle wijzigingen sinds de laatste commit tijdelijk op in een bestand. De code wordt teruggezet naar de toestand van vóór de wijzigingen.       |
| `git stash pop`                      | Zet alle wijzigingen die met `git stash` zijn opgeslagen weer terug.                                                                                 |
| `git stash drop`                     | Verwijdert het bestand met de opgeslagen wijzigingen; de wijzigingen zijn dan voorgoed weg.                                                          |

# Probleemoplossing

### `Permission denied (publickey)`

Je krijgt deze melding bij `git clone`, `git push` of `ssh -T git@github.com` als GitHub je SSH-sleutel niet herkent. Controleer het volgende:

1. **Heb je de sleutel toegevoegd op GitHub?** Kijk bij GitHub > **Settings** > **SSH and GPG keys** of hij in de lijst staat.
2. **Heb je de publieke sleutel gekopieerd?** Dat is het bestand dat eindigt op `.pub`. Het andere bestand (zonder `.pub`) is je privésleutel; die deel je nooit.
3. **Heb je de hele sleutel gekopieerd?** Hij begint met `ssh-ed25519` en eindigt met je naam of computernaam. Er mag niets af zijn.
4. **Werk je op een ander apparaat?** Elk apparaat heeft een eigen sleutel nodig. Volg de [SSH-stappen](#2-ssh-sleutel-aanmaken-voor-git-windowsmaclinux) opnieuw op dat apparaat.
5. **Heb je toegang tot de repository?** Zonder uitnodiging van de WebCie-voorzitter kun je niet pushen, ook als je sleutel goed is. Zie [GitHub-account en toegang](#0-github-account-en-toegang).

Test na elke aanpassing opnieuw met `ssh -T git@github.com`.