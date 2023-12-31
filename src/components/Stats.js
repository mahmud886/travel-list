export default function Stats({ items }) {
    if (!items.length)
        return (
            <p className='stats'>
                <em>
                    <em>Start adding some items to your packing list 🚀</em>
                </em>
            </p>
        );
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
        <footer className='stats'>
            <em>
                {percentage === 100
                    ? `You go everyting! Ready to go ✈️`
                    : `💼 You have ${numItems} items on your list, add you already
                     packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
