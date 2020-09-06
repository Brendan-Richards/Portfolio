import React from 'react';
import classes from './Content.module.css';
import Page from './Page/Page';
import Pianoroll from '../images/Projects/pianoroll.jpg';
import Sentiment from '../images/Projects/word2vec.png';
import BlochSphere from '../images/Projects/Bloch_sphere.svg';
import Myself from '../images/About/myself.jpg';
import Dissonance from '../images/Projects/dissonanceCurves.jpg';
import Github from '../images/Contact/github.png';
import Linkedin from '../images/Contact/linkedin.png';
import Email from '../images/Contact/email.jpg';
import Phone from '../images/Contact/phone.png';
import Resume from '../images/Contact/resume.png';
import MePlaying from '../images/Music/meplaying.png';


const Content = (props) => {

    let titles = null;
    let images = null;
    let explanations = null;
    let links = null;
    let linkTexts = null; 

    switch(props.page) {
        case 'AboutMe': {
            titles = ['About Me'];
            images = [Myself];
            explanations = [
                `<p>Hi, I'm Brendan. I recently graduated from The University of Maryland, Baltimore County with a M.S. in Physics. Before that, 
                    I completed my undergrad at MSU Denver with B.S.'s in Computer Science and Physics.</p>
                    <p>I've loved coding since I was young and became particularly interested in machine learning and artificial intelligence as an 
                    undergrad. Many of my academic projects involve the application of these algorithms to my current area of study. 
                    Other passions that occupy my life include progressive rock music and quantum physics.</p>
                    <p>I grew up in Colorado and love the outdoors as much as anyone here. Much of my free time is spent running, hiking, 
                    and cycling through the rocky mountains.</p>`
            ];
            links = [];
            linkTexts = [];
            break;
        }
        case 'Projects': {
            titles = ['Melody Maker', 'Amazon Review Sentiment Analysis', 'Quantum Control Pulse Optimization', 'Perception and Dissonance'];
            images = [Pianoroll, Sentiment, BlochSphere, Dissonance];
            explanations = [
                `<p>Melody Maker is a project that uses a <a href="https://en.wikipedia.org/wiki/Genetic_algorithm">Genetic Algorithm</a>
                    to create original melodies for music. It works by creating a set of melodies (a population), determining their worth
                    based on a pre-defined fitness metric, allowing the melodies to randomly change (mutation), creating a new population 
                    by preferentially combining high fitness melodies from the current population, and repeating this process until
                    stopping criteria are satisfied.</p>  <p>The code was written in Python and makes use of the mido library to export Midi
                    files after the algorithm has run. Some examples of music I've generated can be found 
                    <a href="./Midi/example1.mid" download>here</a> and <a href="./Midi/example2.mid">here</a>.</p>`,
                `<p>This project is an exploratory effort to classify text as having a positive, neutral, or negative sentiment. Standard
                    classification algorithms require large datasets of labeled training data. Such a dataset can be found by collecting 
                    amazon product reviews which each contain some review text and a corresponding numeric score from 1 to 5. The dataset used for 
                    this project can be found <a href="http://deepyeti.ucsd.edu/jianmo/amazon/">here</a>.</p>
                    <p>Using several python libraries including sklearn, pandas, and numpy, I created a numeric representation of the 
                        text data that machine learning models could understand and trained on hundreds of thousands of examples.
                        I achieved 71% validation accuracy making use of several ensemble methods.</p>`,
                `<p>In the field of Quantum Control physicists try to precisely manipulate the states of quantum systems.
                    This is a nescessary step toward fully realized quantum computers since information must be encoded in 
                    the quantum states of these systems. Researchers manipulate quantum systems in the lab by applying timed electromagnetic pulses. 
                    Determining the optimal amplitude shape turns out to be a complex optimization problem.</p> <p>This project is my 
                    attempt at optimizing pulse shapes with various algorithms and running them on real IBM devices via their
                    <a href="https://quantum-computing.ibm.com/">Quantum Experience API</a>.</p>`,
                `<p>This project was done while I was a physics undergrad at MSU Denver. Based on the work of 
                    <a href="https://sethares.engr.wisc.edu/">Dr. William Sethares</a>, we attempted to quantify the musical 
                    consonance (pleasantness) and dissonance (unpleasantness) produced by 22 different band instruments. I presented my 
                    research at 2 conferences with <a href="./Dissonance/Perception and Dissonance.pdf">this poster</a> and wrote 
                    <a href="./Dissonance/perception and Dissonance-Brendan Richards.pdf">this paper</a> detailing my findings.
                    </p>`
            ];
            links = [
                'https://github.com/Brendan-Richards/MelodyMaker',
                'https://github.com/Brendan-Richards/Sentiment-Analysis',
                'https://github.com/Brendan-Richards/QCPO',
                'https://github.com/Brendan-Richards/Dissonance'
            ];
            linkTexts = [
                'See Melody Maker source code',
                'See my sentiment analysis project on Github',
                'See QCPO source code',
                'See Perception and Dissonance on Github'
            ];
            break;
        }
        case 'Music': {
            titles = ['Music'];
            images = [MePlaying];
            explanations = [
                `<p>I've been playing guitar and writing music for over a decade. My influences come from progressive rock, metal, and the
                    emo/alternative music I grew up with. A video of me playing one of my originals can be found 
                    <a href="https://www.youtube.com/watch?v=xLhgFZLlBuk&ab_channel=CharlesBerthoud">here</a>. I keep my soundcloud 
                    profile up to date with all of my new music.</p> `    
            ];
            links = [
                'https://soundcloud.com/brendan-richards'
            ];
            linkTexts = [
                'See my Soundcloud Profile'
            ];
            break;
        }
        case 'Contact': {
            titles = ['', ' ', '  ', '    ', '     '];
            images = [Email, Phone, Resume, Linkedin, Github];
            explanations = [];
            links = [
                'mailto:brendanrichards8@gmail.com',
                'javascript:void(0)',
                './Resume/brendan_richards_resume.pdf',
                'https://www.linkedin.com/in/brendan-richards/',
                'https://github.com/Brendan-Richards'
            ];
            linkTexts = [
                'brendanrichards8@gmail.com',
                '(720)-937-7197',
                'Resume (Download)',
                'Linkedin',
                'Github'
            ];
            break;
        }

        default: {
            break;
        }
    }

    console.log('re-rendering Content');

    return (
        <div className={classes.Content}>
            <Page 
                className={classes.Page}
                links={links}
                linkTexts={linkTexts}
                titles={titles} 
                images={images} 
                explanations={explanations}/>
        </div>
    );
};

export default React.memo(Content);