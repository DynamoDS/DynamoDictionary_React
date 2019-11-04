import React from "react"

function SectionA() {
	return (<div>
    <h1>Section A error messages</h1>
    
    <p>This section discusses how to handle the following error messages:</p>
    <ul>
        <li>Operation failed</li>
        <li>Deprecated method or node</li>
        <li>Index out of range</li>
        <li>Method not found</li>
        <li>Unhandled exception</li>
    </ul>
		
	<section id="operationfailed">
    <h2>Operation failed</h2>

    <p>
    <var>Operation failed</var> is a generic error message which indicates that one of your
    nodes failed to execute. It is typically followed by additional information regarding 
    which operation failed and why the failure happened. 

    Some of the most common operations that fail are:</p>

    <ul>
    	<li><code>IronPythonEvaluator.EvaluateIronPythonScript</code> - this message is shown when a node
        running your <tt>python</tt> code fails to execute correctly. There are many reasons for this,
        but most commonly this happens because the <tt>python</tt> code contains a bug. This error message 
        is frequently shown with additional information regarding the line of <tt>python</tt> code that failed
        to execute and why that happened. Read more about 
        this error message <a href="https://forum.dynamobim.com/search?q=IronPythonEvaluator.EvaluateIronPythonScript">
        <span style={{textDecoration: 'underline'}}>here</span>
        </a>.
        </li>
    	<li><code>Element.SetParameterByName</code> - read more about 
        this error message <a href="https://forum.dynamobim.com/search?q=Element.SetParameterByName">
        <span style={{textDecoration: 'underline'}}>here</span></a>. 
        </li>
    	<li><code>Floor.ByOutlineTypeAndLevel</code> - read more about 
        this error message <a href="https://forum.dynamobim.com/search?q=Floor.ByOutlineTypeAndLevel">
        <span style={{textDecoration: 'underline'}}>here</span></a>. 
        </li>
    	<li><code>Dictionary.ByKeysValues</code> - read more about 
        this error message <a href="https://forum.dynamobim.com/search?q=Dictionary.ByKeysValues">
        <span style={{textDecoration: 'underline'}}>here</span></a>. 
        </li>
    	<li><code>List.GetItemAtIndex</code> - read more about 
        this error message <a href="https://forum.dynamobim.com/search?q=List.GetItemAtIndex">
        <span style={{textDecoration: 'underline'}}>here</span></a>. 
        </li>
    </ul>
    
    <h4>More information</h4>

    <p>To find out more, please check <a href="https://forum.dynamobim.com/search?q=operation%20failed"><span style={{textDecoration: 'underline'}}>posts on the Dynamobim forum</span></a> discussing "<strong>operation failed</strong>".</p>

	</section>
    
    <section id="deprecatedmethod">
    <h2>Deprecated method or node</h2>

    <p> This warning message means that the authors of Dynamo want to remove this method or node in the future and you
    should try to use different methods or nodes to achieve the same functionality. This warning is a way of notifying
    Dynamo users that the method will be remove in the future, without removing it straight away, so that 
    they have time to update their models.</p>

    <h4>How to fix</h4>

    Try using different methods or nodes to achieve the same functionality. This error message is commonly
    followed by suggestions of what non-deprecated methods to use instead.

    <h4>More information</h4>

    <p>To find out more, please check <a href="https://forum.dynamobim.com/search?q=deprecated"><span style={{textDecoration: 'underline'}}>posts on the Dynamobim forum</span></a> discussing "<strong>deprecated</strong>".</p>

    </section>

    <section id="indexoutofrange">
    <h2>Index is out of range</h2>

    <p> This error message means that your list does not contain an element at the index position you provided.
    For example if your list is <code>[1, 3, 5, 7]</code> and you try to access the element at index <code>5</code>, 
    you will be prompted with an error message as only elements at indices <code>0</code> through <code>3</code> exist 
    in the list.</p>

    <h4>How to fix</h4>

    Make sure the index variable you are using to access elements in the list is greater than or equal
    to <code>0</code> and strictly less than list size. 

    <h4>More information</h4>

    <p>To find out more, please check <a href="https://forum.dynamobim.com/search?q=index%20out%20of%20range"><span style={{textDecoration: 'underline'}}>posts on the Dynamobim forum</span></a> discussing "<strong>index out of range</strong>".</p>

    </section>

    <section id="methodnotfound">
    <h2>Method not found</h2>

    <p> This error message means that Dynamo cannot find a definition for the method you are trying to use.</p>

    <h4>How to fix</h4>

    If you are defining a custom method in a <tt>Code Block</tt>, make sure your code is valid DesignScript. Check the <a href="https://dynamobim.org/wp-content/links/DesignScriptGuide.pdf">Design Script guide</a> for more details.

    <h4>More information</h4>

    <p>To find out more, please check <a href="https://forum.dynamobim.com/search?q=method%20not%20found"><span style={{textDecoration: 'underline'}}>posts on the Dynamobim forum</span></a> discussing "<strong>method not found</strong>".</p>

    </section>

    <section id="unhandledexception">
    <h2>Unhandled Exception</h2>

    <p> This error message typically means that there is a bug in Dynamo code which is causing Dynamo
    to crash. This is not necessarily related to your code and submitting a bug report can
    help Dynamo developers fix these issues in a later release.
    </p>

    <h4>How to fix</h4>

    Saving your work, restarting Dynamo and re-loading your file can help you recover from these errors. In 
    addition, you can try updating Dynamo and the Dynamo libraries you are using on your computer 
    to their latest versions, which might already include fixes for the issues you are facing 

    <h4>More information</h4>

    <p>To find out more, please check <a href="https://forum.dynamobim.com/search?q=unhandled%20exception"><span style={{textDecoration: 'underline'}}>posts on the Dynamobim forum</span></a> discussing "<strong>unhandled exception</strong>".</p>
    </section>

	</div>);
}

export default SectionA