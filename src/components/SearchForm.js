import React, { Component } from 'react'



export default class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             adjectives: ["Accepting", 'Accommodating', 'Afraid', 'Aggressive', 'Agitated', 'Alarmed', 'Amazed', 'Amused', 'Antagonistic', 'Anxious', 'Apathetic', 'Apprehensive', 'Arrogant', 'Astonished', 'Astounded', 'Attentive',
                                    'Blase', 'Bold', 'Bothered', 'Brave',
                                    'Calm', 'Capable', 'Casual', 'Charming', 'Cheerful', 'Cheery', 'Churlish', 'Collected', 'Comfortable', 'Competitive', 'Composed', 'Compulsive', 'Concerned', 'Confident', 'Conflicted', 'Conscientious', 'Conservative', 'Considerate', 'Conspicuous', 'Contemptible', 'Content', 'Convivial', 'Cool', 'Courageous', 'Covetous', 'Creative', 'Critical', 'Curious', 'Cynical',
                                    'Dazzled', 'Debilitated', 'Defensive', 'Dejected', 'Delighted', 'Demeaned', 'Depressed', 'Destructive', 'Devious', 'Devoted', 'Dictatorial', 'Diffident', 'Disdainful', 'Distracted', 'Distraught', 'Distressed', 'Downcast',
                                    'Earnest', 'Edgy', 'Elated', 'Empathetic', 'Enthusiastic', 'Euphoric', 'Exhausted', 'Expectant', 'Explosive', 'Exuberant',
                                    'Ferocious', 'Fierce', 'Flabbergasted', 'Flexible', 'Focused', 'Forgiving', 'Forlorn', 'Frightened', 'Furtive',
                                    'Gloomy', 'Good', 'Grateful', 'Grouchy', 'Guilty',
                                    'Happy', 'Harassed', 'Heroic', 'Hesitant', 'Hopeful', 'Hostile', 'Humble', 'Humorous', 'Hysterical', 'Horny',
                                    'Idealistic', 'Ignorant', 'Ill-tempered', 'Impartial', 'Impolite', 'Imprudent', 'Indifferent', 'Infuriated', 'Insightful', 'Insulted', 'Intense', 'Intimidated', 'Intolerant', 'Irascible',
                                    'Jealous', 'Jolly', 'Jovial', 'Joyful', 'Jubilant', 'Jumpy',
                                    'Kind',
                                    'Languid', 'Liberal', 'Loving', 'Loyal',
                                    'Magical', 'Magnificent', 'Malevolent', 'Malicious', 'Mysterious',
                                    'Needy', 'Negative', 'Neglected', 'Nervy',
                                    'Opinionated',
                                    'Panicky', 'Passionate', 'Patient', 'Perturbed', 'Petrified', 'Petulant', 'Placid', 'Pleased', 'Powerful', 'Prejudicial', 'Prideful',
                                    'Quarrelsome', 'Queasy', 'Quivering',
                                    'Rancorous', 'Rational', 'Reasonable', 'Reckless', 'Reflective', 'Remorseful', 'Repugnant', 'Resilient', 'Resolute', 'Resourceful', 'Respectful', 'Responsible', 'Responsive', 'Restorative', 'Reverent', 'Rude', 'Ruthless',
                                    'Sad', 'Safe', 'Scared', 'Scornful', 'Seething', 'Selfish', 'Sensible', 'Sensitive', 'Serene', 'Shaky', 'Shivering', 'Shocked', 'Sickly', 'Simple', 'Sober', 'Solemn', 'Somber', 'Sour', 'Speechless', 'Spooked', 'Stern', 'Successful', 'Sullen', 'Superior', 'Supportive', 'Surly', 'Suspicious', 'Sweet', 'Sympathetic',
                                    'Tactful', 'Tenacious', 'Tense', 'Terrific', 'Testy', 'Thoughtful', 'Thoughtless', 'Timorous', 'Tolerant', 'Tranquil', 'Treacherous', 'Trembling', 'Truthful',
                                    'Ultimate', 'Uncivil', 'Uncouth', 'Uneasy', 'Unethical', 'Unfair', 'Unique', 'Unmannerly', 'Unnerved', 'Unrefined', 'Unruffled', 'Unsavory', 'Unworthy', 'Uplifting', 'Upset', 'Uptight',
                                    'Versatile', 'Vicious', 'Vigilant', 'Vigorous', 'Vile', 'Villainous', 'Virtuous', 'Vivacious', 'Volatile', 'Vulnerable',
                                    'Warm', 'Wary', 'Waspish', 'Weak', 'Welcoming', 'Wicked', 'Wild', 'Wise', 'Wistful', 'Witty', 'Woeful', 'Wonderful', 'Worrying', 'Worthy',
                                    'Youthful',
                                    'Zany', 'Zealous', ],
        }
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }

    getMovie = (e) => {
        e.preventDefault();
        const {title} = this.state;
        const {searchToProps} = this.props; 
        const {adjectives} = this.state;
        const adj = adjectives.map( v => v.toLowerCase()); 
        const adjLow = adj.includes(title);
        const adjUp = adjectives.includes(title);
        console.log("ADJ ", adjUp)
        if(adjLow && !adjUp){
            searchToProps(title);
        } 
    }
    
    searchRandom = () => {
        const {adjectives} = this.state;
        const random = adjectives[Math.floor(Math.random() * adjectives.length)]
        console.log('RANDOM', random)
        const {searchToProps} = this.props;
        searchToProps(random);
    }
    
    render() {
        return (
            <form onSubmit={this.getMovie}>
                <input 
                type='text' 
                placeholder='title' 
                value={this.state.title} 
                onChange={this.handleChange}></input>
                <button type='submit'>Search</button>
                <button 
                type='button'
                onClick={this.searchRandom}
                >Random search</button>
            </form>

        )
    }
}
