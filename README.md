## Entry points
- first
		- Dynamic import for "hello.js"
			- Dynamic import for "world.js"
- second
		- Regular import for "world.js"

The result is that the chunk containing "world.js" is split but marked as an
"initial" chunk, even though it is also used as an async chunk.
