import React from 'react';
import classes from './Content.module.css';
import Page from './Page/Page';
import Pianoroll from '../images/pianoroll.jpg';
import Sentiment from '../images/word2vec.png';
import BlochSphere from '../images/Bloch_sphere.svg';
import Myself from '../images/myself.jpg';
import Dissonance from '../images/dissonanceCurves.jpg';


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
                'this is an explanation about myself.Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molLorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno mol'
            ];
            links = [];
            linkTexts = [];
            break;
        }
        case 'Projects': {
            titles = ['Melody Maker', 'Amazon Review Sentiment Analysis', 'Quantum Control Pulse Optimization', 'Perception and Dissonance'];
            images = [Pianoroll, Sentiment, BlochSphere, Dissonance];
            explanations = [
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.',
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.',
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.',
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.'     
            ];
            links = [
                'https://github.com/Brendan-Richards/MelodyMaker',
                'https://github.com/Brendan-Richards/Sentiment-Analysis',
                'https://github.com/Brendan-Richards/QCPO',
                'https://github.com/Brendan-Richards/Dissonance'
            ];
            linkTexts = [
                'See Melody Maker on Github',
                'See my sentiment analysis project on Github',
                'See QCPO on Github',
                'See Perception and Dissonance on Github'
            ];
            break;
        }
        case 'Music': {
            titles = ['section1'];
            images = [];
            explanations = [
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.',
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.',
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.'
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
            titles = ['section1', 'section2', 'section3'];
            images = [];
            explanations = [
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.',
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.',
                'Lorem ipsum dolor sit amet, ne tollit nominavi per, eam cu debet ubique tritani. Graece principes laboramus eos an, aeterno molestie ut nec. Per et quaeque bonorum. Et mel debet veniam, pro et legere bonorum repudiare. Vix et populo vivendum suavitate. Pri at probo graecis, no pri mucius vocibus, verear corpora et per.'
            ];
            links = [];
            linkTexts = [];
            break;
        }

        default: {
            break;
        }
    }

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