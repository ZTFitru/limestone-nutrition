function LocationHours() {
    return (
      <section id="location" className="bg-[#8C9B8E] text-gray-800 py-10 px-6 flex flex-col md:flex-row md:items-start md:justify-center gap-10">
        <div className="flex flex-col items-start max-w-xs">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.5047505190646!2d-75.65985992387274!3d39.72498197155927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701c8ca40c429%3A0x38d9b2465445b6ea!2s4569%20Kirkwood%20Hwy%2C%20Wilmington%2C%20DE%2019808!5e1!3m2!1sen!2sus!4v1745448854400!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                className="rounded"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <p className="text-black font-semibold">4569 Kirkwood Hwy</p>
            <p>Wilmington, DE 19808</p>
        </div>

        <div className="text-sm text-black font-semibold">
          <table className="table-auto w-full">
            <tbody>
              {[
                ['Mon', '7:00 AM - 4:00 PM'],
                ['Tue', '7:00 AM - 4:00 PM'],
                ['Wed', '7:00 AM - 4:00 PM'],
                ['Thu', '7:00 AM - 4:00 PM'],
                ['Fri', '7:00 AM - 4:00 PM'],
                ['Sat', '10:00 AM - 2:00 PM'],
                ['Sun', 'Closed'],
              ].map(([day, time, note], idx) => (
                <tr key={idx} className="border-b">
                  <td className="pr-6 py-2">{day}</td>
                  <td className="py-2">{time}</td>
                  <td className="text-red-500 font-medium pl-4">{note || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  
  export default LocationHours;