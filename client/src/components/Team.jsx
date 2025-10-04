import React, { useState, useEffect } from 'react';
import { Linkedin } from 'react-feather';
import { getTeam } from '../services/api';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await getTeam();
      setTeam(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching team:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <div className="animate-pulse">Loading team...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate educators and industry experts dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="card p-6 text-center group"
            >
              <div className="relative mb-4 inline-block">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.tagline}</p>

              <a
                href={member.linkedin}
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
