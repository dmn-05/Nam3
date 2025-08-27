<form method="post" action="{{ route('dog.create') }}">
 @csrf
 <label>Name</label>
 <input type="text" name="name" id="name">
 <input type="submit" name="send" value="Submit">
</form>