export function CodeBlock({ label, children }: { label: string; children: string }) {
	return (
		<div className="my-7 overflow-hidden border border-gray-800 bg-gray-950 shadow-lg">
			<div className="border-b border-gray-800 px-5 py-3 font-mono text-xs text-gray-400">
				{label}
			</div>
			<pre className="overflow-x-auto p-5 text-sm leading-7 text-gray-100">
				<code>{children}</code>
			</pre>
		</div>
	);
}
