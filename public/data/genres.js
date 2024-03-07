const genreData = [
    {
        id: '64eb166d1bbc5294691609a8',
        title: 'pop',
        summary:
            "The term 'pop music' refers to a combination of multiple highly popular musical genres within a society. The term 'genre' identifies musical pieces as belonging to a shared tradition or set of conventions more or less accepted by the vast majority of music experts. Music authors David Hatch and Stephen Millward defined pop music as 'a body of music, which is distinguishable from popular, jazz, and folk music.' Although pop music is often thought of as only chart-oriented singles, it is a musical style that is not necessarily the sum of all the music charts, which have always featured songs from a variety of different sources. Thus, the term 'pop music' can be used to describe an independent genre, aimed at a young market, often characterized as a softer alternative to rock and roll.",
        image: 'https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/d583189eae749ae3cae4448706466442%2Fpop.jpg?alt=media&token=5a1ed20c-2636-416b-a35c-89c4fcebd2b4',
    },
    {
        id: '64eb16df1bbc5294691609ac',
        title: 'classical',
        summary:
            "Classical music generally refers to the art music of the Western world, considered to be distinct from Western folk music or popular music traditions. It is sometimes distinguished as Western classical music, as the term 'classical music' also applies to non-Western art music. Classical music is often characterized by formality and complexity in its musical form and harmonic organization, particularly with the use of polyphony. Since at least the ninth century it has been primarily a written tradition, spawning a sophisticated notational system, as well as accompanying literature in analytical, critical, historiographical, musicological and philosophical practices. A foundational component of Western culture, classical music is frequently seen from the perspective of individual or groups of composers, whose compositions, personalities and beliefs have fundamentally shaped its history.",
        image: 'https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/1VhGCAPTtL4McrhW%2Fclassical.jpg?alt=media&token=8e99ea00-e108-4f9d-9e02-edd7179407cb',
        
    },
    {
        id: '64eb17caf9627864be3256c8',
        title: 'electronic',
        summary:
            'Electronic music is a genre of music that employs electronic musical instruments, digital instruments, or circuitry-based music technology in its creation. It includes both music made using electronic and electromechanical means (electroacoustic music). Pure electronic instruments depended entirely on circuitry-based sound generation, for instance using devices such as an electronic oscillator, theremin, or synthesizer. Electromechanical instruments can have mechanical parts such as strings, hammers, and electric elements including magnetic pickups, power amplifiers and loudspeakers. Such electromechanical devices include the telharmonium, Hammond organ, electric piano and the electric guitar.',
        image: 'https://www.musicgrotto.com/wp-content/uploads/2023/01/edm-electronic-dance-music-graphic-art.jpg',
    },
    {
        id: '64eb185af9627864be3256cd',
        title: 'jazz',
        summary:
            'Jazz is a distinctively American style of music that developed in the early decades of the 20th century. Its roots include many Afro-American folk music traditions, such as spirituals, work songs, and blues. It also borrowed from 19th century band music and the ragtime style of piano playing. The distinctive elements of jazz include characteristic rhythm patterns, harmonic practices related to, but not identical with, functional harmony, and the practice of improvisation. Jazz has influenced, and has been influenced by, traditional classical music and popular music. The boundaries are not always especially clear. Although jazz has a relatively short history, it has developed several distinct styles with which nonspecialists should be at least superficially familiar.',
        image: 'https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/AwPku3OkTVbrvKeA%2Fjazz.jpg?alt=media&token=63a8def5-8fe0-483f-aa20-8b6c67574345',
    },
    {
        id: '64eb1937eb5894dcbb7b8f41',
        title: 'hiphop',
        summary:
            "Hip hop or hip-hop, also known as rap and formerly known as disco rap, is a genre of popular music that was originated in the Bronx borough of New York City in the early 1970s by African Americans, having existed for several years prior to mainstream discovery. Hip hop originated as an anti-drug and anti-violence genre, while consisting of stylized rhythmic music (usually built around drum beats) that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted. According to the professor Asante of African American studies at Temple University, 'hip hop is something that blacks can unequivocally claim as their own'. It was developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti art. Other elements include sampling beats or bass lines from records (or synthesized beats and sounds), and rhythmic beatboxing. While often used to refer solely to rapping.",
        image: 'https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/NJ9QC5f1l0entwOO%2Fhiphop.jpg?alt=media&token=c396e85b-8628-4df6-a678-67674339e8dc',
    },
    {
        id: '64eb19b8eb5894dcbb7b8f46',
        title: 'lounge',
        summary:
            "Lounge music is a type of easy listening music popular in the 1950s and 1960s. It may be meant to evoke in the listeners the feeling of being in a place, usually with a tranquil theme, such as a jungle, an island paradise or outer space. The range of lounge music encompasses beautiful music-influenced instrumentals, modern electronica (with chillout, and downtempo influences), while remaining thematically focused on its retro-space age cultural elements. The earliest type of lounge music appeared during the 1920s and 1930s, and was known as light music. Exotica, space age pop, and some forms of easy listening music popular during the 1950s and 1960s are now broadly termed 'lounge'. The term 'lounge' does not appear in textual documentation of the period, such as Billboard magazine or long playing album covers, but has been retroactively applied.",
        image: 'https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/PQ2uISC3YeAUvTXU%2Flounge.jpg?alt=media&token=c9c6df80-788f-450c-8075-4b607e1e741a',  
    },
    {
        id: '64eb1a12eb5894dcbb7b8f4b',
        title: 'r&b',
        summary:
            "The term 'rhythm and blues' often called 'R&B' originated in the 1940s when it replaced 'race music' as a general marketing term for all African American music, though it usually referred only to secular, not religious music. The term first appeared in commercial recording in 1948, when RCA Victor records began using 'blues and rhythm' music as a descriptor for African American secular songs. The migration of African Americans to urban centers in the Northeast and Midwest during the early twentieth century helped to bring various regional styles of African American music together to influence one another. The migration also created new markets for these styles of music. Early on the term 'rhythm and blues' was used for boogie woogie, African American swing, jazz, and blues. All of these styles influenced the development of what is called rhythm and blues today.",
        image: 'https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/eSGnAvTJOANJDz80%2Fr%26b.jpg?alt=media&token=43cee135-f587-44dd-a501-505b30aeb938',
    },
    {
        id: '64eb1a6feb5894dcbb7b8f50',
        title: 'soul',
        summary:
            "Soul music is a collective term for several forms of pop music that Black Americans pioneered from the mid-twentieth century onward. Genres grouped under the 'soul' banner include rhythm and blues (R&B), urban blues, Motown, smooth jazz, and gospel music.Soul as a genre came into fruition in the early 1960s when record labels such as Motown, Atlantic, and Stax records actively recruited and supported Black artists in an otherwise fairly segregated music business. During this era, many forms of soul music entwined with the civil rights movement, as Black pop musicians sought to connect their art to the social and political struggles of the era. Soul music is the foundation for more contemporary music traditions, including hip-hop, disco, and electronic music. Classic soul also remains popular on many radio stations and streaming services.",
        image: 'https://firebasestorage.googleapis.com/v0/b/collection-c2379.appspot.com/o/jds0zwE31NtOXcyA%2Fsoul.jpg?alt=media&token=a807ae51-c344-487e-90a9-78aca41028e3',
    },
]

export default genreData
