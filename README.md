# ApickliToGo

A stripped down version of [Apickli](https://github.com/apickli/apickli) that I introduce to teams for API Contract testing.

We'll add a few gherkins here and there that go beyond this excellent, lightweight tool for your CI test suite.

## The built-in Gherkin Expressions
The following gherkin expressions are implemented in apickli source code [source/apickli/apickli-gherkin.js](https://github.com/apickli/apickli/blob/master/source/apickli/apickli-gherkin.js):

```
GIVEN:
	I set (.*) header to (.*)
    	I set cookie to (.*)
	I set body to (.*)
	I pipe contents of file (.*) to body
	I have basic authentication credentials (.*) and (.*)
	I set bearer token
	I have (.+) client TLS configuration
	I set query parameters to (data table with headers |parameter|value|)
	I set headers to (data table with headers |name|value|)
    	I set form parameters to (data table with headers |parameter|value|)

WHEN:
	I GET $resource
	I POST to $resource
	I PUT $resource
	I DELETE $resource
	I PATCH $resource
	I request OPTIONS for $resource

THEN:
	response code should be (\d+)
	response code should not be (\d+)
	response header (.*) should exist
	response header (.*) should not exist
	response header (.*) should be (.*)
	response header (.*) should not be (.*)
	response body should be valid (xml|json)
	response body should contain (.*)
	response body should not contain (.*)
	response body path (.*) should be (.*)
	response body path (.*) should not be (.*)
   	response body path (.*) should be of type array
   	response body path (.*) should be of type array with length (\d+)
   	response body should be valid according to schema file (.*)
   	response body should be valid according to openapi description (.*) in file (.*)
	I store the value of body path (.*) as access token
	I store the value of response header (.*) as (.*) in scenario scope
	I store the value of body path (.*) as (.*) in scenario scope
	value of scenario variable (.*) should be (.*)
	I store the value of response header (.*) as (.*) in global scope
	I store the value of body path (.*) as (.*) in global scope
  ```
  
### notes
You will just need to expand on these to inspect the contents of the API responses.
Checking for expected attributes in both 200 and errors is enough to confirm a solid contract on Gets.

