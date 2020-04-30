
  
import React from "react";
import Title from "../components/Title";
import './approach.scss'
import { useEffect } from "react";
import gsap from 'gsap'
import Footer from "../components/Footer";

import StickyFooter from 'react-sticky-footer'

const Approach = () => {
  useEffect(()=>
  {
    gsap.from('.inner', 0.8, {
      delay: 0.8,
      ease: "power3.in-out",
      y: 64,
      stagger: {
        amount: 1.7
      }
    });
  
  });
  return (
   <div className="container1">
     <div className="page3">
     <div className="row3">
     <div className='inner3'>
      <Title lineContent='Machine Learning, NLP: Text' lineContent2='Classification using scikit-learn' />
      <p className='other'>
      Assigning categories to documents, which can be a web page, library book, media articles,
       gallery etc. has many applications like e.g. spam filtering, email routing, sentiment analysis etc. 
       In this article, I would like to demonstrate how we can do text classification using python, 
       scikit-learn and little bit of NLTK.
      </p>
    </div>
     </div>
     <div className="row3" style={{backgroundColor:"#1DA1F2"}}>
     <div className='inner3'>
       <Title lineContent='Step 1: Prerequisite and setting' lineContent2='up the environment' />
      <p className='other3'>
      The prerequisites to follow this example are python version 2.7.3 and jupyter notebook.
       You can just install anaconda and it will get everything for you. Also, little bit of python
        and ML basics including text classification is required. We will be using scikit-learn (python)
         libraries for our example.
      </p>
    </div>
     </div>
     <div className="row3" style={{backgroundColor:"#1DA1F2"}}>
     <div className='inner3'>
       <Title lineContent='Step 2: Loading ' lineContent2='the data set in jupyter.' />
      <p className='other3' >
      This data set is in-built in scikit, so we don’t need to download it explicitly. <br/> <br/>
<b>i.</b> Open command prompt in windows and type ‘jupyter notebook’. This will open the notebook in browser and start a session for you. <br/>
<b>ii.</b> Select New > Python 2. You can give a name to the notebook - Text Classification Demo 1. <br/>
<b>iii.</b> Loading the data set: (this might take few minutes, so patience) <hr/>

<b>Note: Above, we are only loading the training data. We will load the test data separately later in the example.</b> <br/>
<b>iv.</b> You can check the target names (categories) and some data files by following commands. <br/> <hr/>


      </p>
    </div>
     </div>
     <div className="row3" style={{backgroundColor:"#1DA1F2"}}>
     <div className='inner3'>
       <Title lineContent='Step 3: Extracting ' lineContent2='features from text files.' />
      <p className='other3'>
      Text files are actually series of words (ordered). In order to run machine learning algorithms we need to convert the text files into numerical feature vectors. We will be using bag of words model for our example. Briefly, we segment each text file into words (for English splitting by space), and count # of times each word occurs in each document and finally assign each word an integer id. Each unique word in our dictionary will correspond to a feature (descriptive feature).
Scikit-learn has a high level component which will create feature vectors for us ‘CountVectorizer’. More about it here. <br/> <hr/>
     
<br/>
TF: Just counting the number of words in each document has 1 issue: it will give more weightage to longer documents than shorter documents. To avoid this, we can use frequency (TF - Term Frequencies) i.e. #count(word) / #Total words, in each document.
TF-IDF: Finally, we can even reduce the weightage of more common words like (the, is, an etc.) which occurs in all document. This is called as TF-IDF i.e Term Frequency times inverse document frequency.
We can achieve both using below line of code: <br/> <hr/>
<b>The last line will output the dimension of the Document-Term matrix -> (11314, 130107).</b>
      </p>
    </div>
     </div>
     <div className="row3" style={{backgroundColor:"#1DA1F2"}}>
     <div className='inner3'>
       <Title lineContent='Step 4. Running ' lineContent2='ML algorithms.' />
      <p className='other3' style={{marginLeft:"100px"}}>
      There are various algorithms which can be used for text classification. We will start with the most simplest one ‘Naive Bayes (NB)’
You can easily build a NBclassifier in scikit using below 2 lines of code: (note - there are many variants of NB, but discussion about them is out of scope).
<br/>
This will train the NB classifier on the training data we provided.
Building a pipeline: We can write less code and do all of the above, by building a pipeline as follows:
 <br/>
The names ‘vect’ , ‘tfidf’ and ‘clf’ are arbitrary but will be used later.
Performance of NB Classifier: Now we will test the performance of the NB classifier on test set. <hr/>

The accuracy we get is ~77.38%, which is not bad for start and for a naive classifier. Also, congrats!!! you have now written successfully a text classification algorithm 
Support Vector Machines (SVM): Let’s try using a different algorithm SVM, and see if we can get any better performance. More about it here.
 
<b>The accuracy we get is~82.38%. Yipee, a little better <span role="img" aria-labelledby="">👌</span></b>
      </p>
    </div>
     </div>
     <div className="row3" style={{backgroundColor:"#1DA1F2"}}>
     <div className='inner3'>
       <Title lineContent='Step 5. Grid Search'  />
      <p className='other3'>
      Almost all the classifiers will have various parameters which can be tuned to obtain optimal performance. Scikit gives an extremely useful tool ‘GridSearchCV’.
     
Here, we are creating a list of parameters for which we would like to do performance tuning. All the parameters name start with the classifier name (remember the arbitrary name we gave). E.g. vect__ngram_range; here we are telling to use unigram and bigrams and choose the one which is optimal.
Next, we create an instance of the grid search by passing the classifier, parameters and n_jobs=-1 which tells to use multiple cores from user machine.

This might take few minutes to run depending on the machine configuration.
Lastly, to see the best mean score and the params, run the following code: 

The accuracy has now increased to ~90.6% for the NB classifier (not so naive anymore!) and the corresponding parameters are ‘clf__alpha’: 0.01, ‘tfidf__use_idf’: True, ‘vect__ngram_range’: (1, 2).
Similarly, we get improved accuracy ~89.79% for SVM classifier with below code. Note: You can further optimize the SVM classifier by tuning other parameters. This is left up to you to explore more.
     

      </p>
    </div>
     </div>
     <div className="row3" style={{backgroundColor:"#1DA1F2"}}>
     <div className='inner3'>
       <Title lineContent='Step 6: Useful tips and ' lineContent2='a touch of NLTK.' />
      <p className='other3' style={{marginLeft:"144px"}}>
       <b>Removing stop words: (the, then etc) from the data. You should do this only when stop words are not useful for the underlying problem. In most of the text classification problems, this is indeed not useful. Let’s see if removing stop words increases the accuracy. Update the code for creating object of CountVectorizer as follows:</b>
     
This is the pipeline we build for NB classifier. Run the remaining steps like before. This improves the accuracy from 77.38% to 81.69% (that is too good). You can try the same for SVM and also while doing grid search.
2. FitPrior=False: When set to false for MultinomialNB, a uniform prior will be used. This doesn’t helps that much, but increases the accuracy from 81.69% to 82.14% (not much gain). Try and see if this works for your data set.
3. Stemming: From Wikipedia, stemming is the process of reducing inflected (or sometimes derived) words to their word stem, base or root form. E.g. A stemming algorithm reduces the words “fishing”, “fished”, and “fisher” to the root word, “fish”.
We need NLTK which can be installed from here. NLTK comes with various stemmers (details on how stemmers work are out of scope for this article) which can help reducing the words to their root form. Again use this, if it make sense for your problem.
Below I have used Snowball stemmer which works very well for English language.

 The accuracy with stemming we get is ~81.67%. Marginal improvement in our case with NB classifier. You can also try out with SVM and other algorithms.
Conclusion: We have learned the classic problem in NLP, text classification. We learned about important concepts like bag of words, TF-IDF and 2 important algorithms NB and SVM. We saw that for our data set, both the algorithms were almost equally matched when optimized. Sometimes, if we have enough data set, choice of algorithm can make hardly any difference. We also saw, how to perform grid search for performance tuning and used NLTK stemming approach. You can use this code on your data set and see which algorithms works best for you.

        </p>
        <br/> <br/>
    </div>
     </div>
    
     <StickyFooter
    bottomThreshold={50}>
      
   <Footer/> 
</StickyFooter>
   </div>
   
   
   </div>
  );
};

export default Approach;
