<template>
    <v-container fluid class="container">
        <v-app-bar app color="secondary" dark>
            <div class="d-flex align-center">
              <v-img
                alt="Nirvana logo"
                class="shrink mr-2"
                contain
                src="@/assets/nirvanalogo.png"
                transition="scale-transition"
                width="30"
              />
    
              <h2>Nirvana</h2>
            </div>
    
            <v-spacer></v-spacer>
            <v-btn text>My Sessions</v-btn>
            <v-btn text @click="$router.push('/myProfilePage')">
              <v-icon size="24px"> mdi-account-circle-outline </v-icon>
            </v-btn>
          </v-app-bar>
        <v-card class="mx-auto" max-width="370">
            <v-img class="white--text align-end" height="200px" src="../assets/phg-4.png">
                <v-card-title class="text-h5 mb-1 ">Nature photography<br>Pashan Tekdi, Pune</v-card-title>
            </v-img>
            <v-img class="white--text align-end" height="180px" src="../assets/BACKG.png">

                <v-card-subtitle class="pb-0 card-subtitle">
                    <p><span style="font-weight: bold;">Details</span> </p>
                </v-card-subtitle>
                <v-card-text class="pb-0 card-subtitle1 text-vcard ">
                    Photography session at Huda Park to capture birds and plants.Enthusiastic photographer are entertained.Do bring your own cameras for better experiences

                    <br><span style="font-weight: bold;">Date:</span>
                    07/04/23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style="font-weight: bold;"> Time:</span> 5:00 <br>
                    <span style="font-weight: bold;">Venue:</span> Pashan Hill,Pashan Gaom <br>
                </v-card-text>
            </v-img>
            <v-card-actions>
                <v-btn color="accent" class="my-btn">
                    Add to My Session
                </v-btn>
                <v-btn class="my-btn" color="accent">
                    Get Contact
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="mx-auto" max-width="370">
            <v-img class="white--text align-end" height="200px" src="../assets/phg-1.png">
                <v-card-title class="text-h5 mb-1 ">Portrait photography session<br>Picto museum, Pune</v-card-title>
            </v-img>
            <v-img class="white--text align-end" height="180px" src="../assets/BACKG.png">

                <v-card-subtitle class="pb-0 card-subtitle">
                    <p><span style="font-weight: bold;">Details</span> </p>
                </v-card-subtitle>
                <v-card-text class="pb-0 card-subtitle1 text-vcard ">
                    Need a partner for study of portraits and capturing faces.Photographers who have studied about potraits and have 5D lens are highly entertained.
                    <br>
                    <br><span style="font-weight: bold;">Date:</span>
                    27/04/23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style="font-weight: bold;"> Time:</span> 17:00 <br>
                    <span style="font-weight: bold;">Venue:</span> Polar Museum, Art Exhibition ,Baner <br>
                </v-card-text>
            </v-img>
            <v-card-actions>
                <v-btn color="accent" class="my-btn">
                    Add to My Session
                </v-btn>
                <v-btn class="my-btn" color="accent">
                    Get Contact
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="mx-auto" max-width="370">
            <v-img class="white--text align-end" height="200px" src="../assets/phg-3.png">
                <v-card-title class="text-h5 mb-1 ">Photography at ARAI<br>Aundh, Pune</v-card-title>
            </v-img>
            <v-img class="white--text align-end" height="180px" src="../assets/BACKG.png">

                <v-card-subtitle class="pb-0 card-subtitle">
                    <p><span style="font-weight: bold;">Details</span> </p>
                </v-card-subtitle>
                <v-card-text class="pb-0 card-subtitle1 text-vcard ">
                    Photo session in the morning to capture the beautiful landscape of ARAI hills.Friscious waterfalls passing by the hills. Melodious for photographers to capture such a beauity.

                    <br><span style="font-weight: bold;">Date:</span>
                    07/04/23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style="font-weight: bold;"> Time:</span> 16:30 <br>
                    <span style="font-weight: bold;">Venue:</span> Arai hill,Near by Taban dam,Baner <br>
                </v-card-text>
            </v-img>
            <v-card-actions>
                <v-btn color="accent" class="my-btn">
                    Add to My Session
                </v-btn>
                <v-btn class="my-btn" color="accent">
                    Get Contact
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-container>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url('../assets/BACKG.png');
height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

.card-subtitle1 {
color: rgb(24, 11, 11);
}

.card-subtitle {
color: rgb(24, 11, 11);
font-size: 18px;
border-bottom: 2px solid transparent;
/* set a transparent border to make space for the custom border */
border-image: linear-gradient(to right, #8b00dbc2, #8b00dbc2) 1;
/* create a gradient border */
border-image-slice: 1 0.000001cm;
/* set the border to repeat only 1cm */
font-family: sans-serif !important;
}

.text-vcard {
font-family: sans-serif !important;
}

.text-h5 {
font-size: 18px !important;
/* adjust the font size as per your requirement */
margin-bottom: 1em;
/* adjust the margin value as per your requirement */
/* set the font family to Montserrat */

}

/* 10 over cricket match */
p {
line-height: 0.3;
}

.my-btn {   
padding: 20px !important;
}
</style>