import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Pokemon {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  canEvolve: boolean;
  isCute: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('pokemonTable') pokemonTable!: ElementRef;
  title = 'POKEMON';
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      type: 'Grass',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      description:
        '"Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger."',
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
      },
      canEvolve: true,
      isCute: true,
    },
    {
      id: 2,
      name: 'Pikachu',
      type: 'Electric',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      description:
        '"Pikachu is a mouse Pokemon. It has small electric sacs on the top of its head. These sacs generate charges using friction from the ground."',
      stats: {
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90,
      },
      canEvolve: true,
      isCute: true,
    },
    {
      id: 3,
      name: 'Squirtle',
      type: 'Water',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      description:
        '"Squirtle can shoot water at high velocity using its well-developed spines. This Pokémon can swim backwards by rapidly flinging its spines."',
      stats: {
        hp: 44,
        attack: 48,
        defense: 65,
        speed: 43,
      },
      canEvolve: true,
      isCute: true,
    },
    {
      id: 4,
      name: 'Charmander',
      type: 'Fire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      description:
        '"Charmander is a Charmeleon. It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."',
      stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
      },
      canEvolve: true,
      isCute: true,
    },
    {
      id: 5,
      name: 'Pidgey',
      type: 'Normal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
      description:
        '"Pidgey, the Tiny Bird Pokémon. A Normal and Flying type. Pidgey usually doesnt like to battle, but it wont hesitate to attack if provoked."',
      stats: {
        hp: 40,
        attack: 45,
        defense: 40,
        speed: 56,
      },
      canEvolve: true,
      isCute: false,
    },
    {
      id: 6,
      name: 'Piplup',
      type: 'Water',
      image: 'https://www.ssbwiki.com/images/c/ca/Piplup-Origin.png',
      description:
        '"Piplup is a light-blue, penguin-like Pokémon, which is covered in thick down to insulate against the cold. It has a dark blue head with a primarily white face and a short, yellow beak."',
      stats: {
        hp: 53,
        attack: 51,
        defense: 53,
        speed: 40,
      },
      canEvolve: true,
      isCute: true,
    },
    {
      id: 7,
      name: 'Charizard',
      type: 'Fire',
      image: 'https://www.ssbwiki.com/images/9/96/CharizardArtwork.png',
      description:
        '"Charizards are orange dragon-like Pokémon that have two wings, that are blue on the front, and orange on the back. Its belly and soles are cream-colored, while their eyes are light blue. The video games say that Charizards wings can bring it to 4,600 feet in the sky."',
      stats: {
        hp: 78,
        attack: 84,
        defense: 78,
        speed: 100,
      },
      canEvolve: false,
      isCute: false,
    },
    {
      id: 8,
      name: 'Mewtwo',
      type: 'Psychic',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/43/Pokémon_Mewtwo_art.png',
      description:
        '"Mewtwo is an artificial Pokémon. It is a bipedal, humanoid Pokémon with some feline features. It is primarily gray with a long, purple tail. On top of its head are two short, blunt horns, and it has purple eyes."',
      stats: {
        hp: 104,
        attack: 110,
        defense: 90,
        speed: 100,
      },
      canEvolve: true,
      isCute: false,
    },
    {
      id: 9,
      name: 'Snorlax',
      type: 'Normal',
      image:
        'https://archives.bulbagarden.net/media/upload/3/3f/0143Snorlax.png',
      description:
        '"Snorlax is a noseless ursid-like Pokémon that has a cream-colored face, hands, and feet, while the rest of its body is teal in color."',
      stats: {
        hp: 160,
        attack: 110,
        defense: 65,
        speed: 30,
      },
      canEvolve: false,
      isCute: true,
    },
{
      id: 10,
      name: 'Eevee',
      type: 'Normal',
      image:
        'https://upload.wikimedia.org/wikipedia/en/a/a9/Pokémon_Eevee_art.png',
      description:
        '"Eevee is a mammalian creature with brown fur, a bushy tail that has a cream-colored tip, and a furry collar that is also cream-colored. Eevee has brown eyes, big ears, and pink paw pads."',
      stats: {
        hp:55 ,
        attack:55 ,
        defense:50,
        speed:55,
      },
      canEvolve: true,
      isCute: true,
    },
    {
      id:11,
      name: 'Vaporeon',
      type: 'Water',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png',
      description:
        '"Vaporeon are highly adapted to aquatic life. Unlike their pre-evolution, they have the ability to breathe underwater. Vaporeon have the power to melt into water and disappear, and are shown to be able to manipulate water molecules. They can detect moisture and water with their light-blue fins.."',
      stats: {
        hp: 130,
        attack: 65,
        defense: 60,
        speed: 65,
      },
      canEvolve: false,
      isCute: false,

    },
    {
      id:12,
      name: 'Jolteon',
      type: 'Electric',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png',
      description:
        '"A sensitive Pokémon that easily becomes sad or angry. Every time its mood changes, it charges power. If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes. It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts."',
      stats: {
        hp: 65,
        attack: 65,
        defense: 60,
        speed: 130,
      },
      canEvolve: false,
      isCute: false,
    },
    {
      id:13,
      name: 'Flareon',
      type: 'Fire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png',
      description:
        '"Flareons fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémons body temperature can rise to a maximum of 1,650 degrees Fahrenheit."',
      stats: {
        hp: 65,
        attack: 130,
        defense: 60,
        speed: 65,
      },
      canEvolve: false,
      isCute: false,  
    },
    {
      id:14,
      name: 'Umbreon',
      type: 'Dark',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
      description:
        '"Umbreon is a spooky and magical Pokémon that evolves from a spooky and magical Pokémon. It evolves into a spooky and magical Pokémon when it is exposed to a mysterious light."',
      stats: {
        hp: 95,
        attack: 65,
        defense: 110,
        speed: 65,
      },
      canEvolve: false,
      isCute: false,
    },
    {
      id:15,
      name: 'Espeon',
      type: 'Psychic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png',
      description:
        '"Espeon is a mysterious and elusive Pokemon. It is said to have the power to make itself invisible. It has been observed in Galar."',
      stats: {
        hp: 65,
        attack: 65,
        defense: 60,
        speed: 110,
      },
      canEvolve: false,
      isCute: false,
    },
    {
      id:16,
      name: 'Leafeon',
      type: 'Grass',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png',
      description:
        '"Leafeon is an extremely magical Pokemon. It is said that when the Pokémon is in trouble, its leaf grows continuously. It has been observed in Galar."',
      stats: {
        hp: 65,
        attack: 130,
        defense: 60,
        speed: 65,
      },
      canEvolve: false,
      isCute: false,
    },
    {
      id:17,
      name: 'Glaceon',
      type: 'Ice',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png',
      description:
        '"Glaceon is a legendary Pokemon. It has the power to freeze moisture in the atmosphere. It has been observed in Galar."',
      stats: {
        hp: 65,
        attack: 60,
        defense: 110,
        speed: 65,
      },
      canEvolve: false,
      isCute: false,
    },
    {
      id:18,
      name: 'Sylveon',
      type: 'Fairy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png',
      description:
        '"Sylveon emits a very beautiful ray of light. It can be seen everywhere. It has been observed in Galar."',
      stats: {
        hp: 95,
        attack: 65,
        defense: 65,
        speed: 60,
      },
      canEvolve: false,
      isCute: true,
    },
    {
      id:19,
      name: 'Abra',
      type: 'Psychic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png',
      description:
        '"Abra has the ability to read minds. It is said that if an Abra appears before a Ditto and its three Abilities, it will make the Ditto evolve."',
      stats: {
        hp: 25,
        attack: 20,
        defense: 15,
        speed: 90,
      },
      canEvolve: true,
      isCute: true,
    },
    {
      id:20,
      name: 'Kadabra',
      type: 'Psychic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png',
      description:
        '"Kadabra is a primarily yellow, slightly humanoid Pokémon with mammalian features. It has two long, pointed ears on top of its head, a red star on its forehead, narrow, deep-set eyes, and wide cheeks leading down to a thin snout."',
      stats: {
        hp: 40,
        attack: 35,
        defense: 30,
        speed: 105,
      },
      canEvolve: true,
      isCute: false,
    },
    {
      id:21,
      name: 'Alakazam',
      type: 'Psychic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
      description:
        '"Alakazams brain continually grows, infinitely multiplying brain cells. This amazing brain gives this Pokémon an astoundingly high IQ of 5,000. It has a thorough memory of everything that has occurred in the world. While it has strong psychic abilities and high intelligence, an Alakazams muscles are very weak."',
      stats: {
        hp: 55,
        attack: 50,
        defense: 45,
        speed: 120,
      },
      canEvolve: false,
      isCute: false,
    }

  ];

  selectedSortOption: string = 'id';
  pokemonName: string = '';
  searchError: boolean = false;
  isSearchConfirmed: boolean = false;

  handleKeyDown(event: any) {}
   handleKeyUp(event: any) {
    this.pokemonName = event.target.value;
    this.searchError = false;
    this.isSearchConfirmed = false;
  }


  confirmSearch() {
    console.log('Searching for:', this.pokemonName);

    const matchingPokemon = this.findPokemonByName(this.pokemonName);
    console.log('Matching Pokemon:', matchingPokemon);

    if (matchingPokemon) {
      this.scrollToPokemon(matchingPokemon.id);
      this.setSearchResults(true); // Set isSearchConfirmed to true for successful search
    } else {
      this.setSearchResults(false); // Set isSearchConfirmed to false for unsuccessful search
    }
  }

  setSearchResults(isConfirmed: boolean) {
    this.isSearchConfirmed = isConfirmed;
    this.searchError = !isConfirmed;
  }
  findPokemonByName(name: string): Pokemon | undefined {
    return this.pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
  }

  isSearchedPokemon(pokemon: Pokemon): boolean {
    return (
      this.isSearchConfirmed &&
      !this.searchError &&
      pokemon.name.toLowerCase() === this.pokemonName.toLowerCase()
    );
  }

  scrollToPokemon(id: number) {
    const pokemonRow = this.pokemonTable.nativeElement.querySelector(
      `#pokemon-${id}`
    );
    if (pokemonRow) {
      pokemonRow.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
 onSortChange(event: any) {
    switch (this.selectedSortOption) {
      case 'id':
        this.pokemons.sort((a, b) => a.id - b.id);
        break;
      case 'name':
        this.pokemons.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'type':
        this.pokemons.sort((a, b) => a.type.localeCompare(b.type));
        break;
      case 'evolve':
        this.pokemons.sort((a, b) => {
          if (a.canEvolve && !b.canEvolve) return -1;
          if (!a.canEvolve && b.canEvolve) return 1;
          return 0;
        });
        break;
      case 'cute':
        this.pokemons.sort((a, b) => {
          if (a.isCute && !b.isCute) return -1;
          if (!a.isCute && b.isCute) return 1;
          return 0;
        });
        break;
      default:
        // Default to sorting by id (Index)
        this.pokemons.sort((a, b) => a.id - b.id);
        break;
    }
  }


   sortPokemons() {
    this.pokemons.sort((a, b) => {
      if (this.selectedSortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (this.selectedSortOption === 'type') {
        return a.type.localeCompare(b.type);
      } else if (this.selectedSortOption === 'id') {
        return a.id - b.id;
      }
      // Add more cases if needed
      return 0;
    });
  }
   ngOnInit() {
    this.sortPokemons();
  }


  constructor() {}
}