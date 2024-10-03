'use client'
import React, { useEffect } from 'react'

type Props = {}

export default function EmbedJobs({}: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
    script.onload = () => {
      // @ts-ignore
      rec_embed_js.load({
        widget_id: "rec_job_listing_div",
        page_name: "Careers",
        source: "CareerSite",
        site: "https://mctekk.zohorecruit.com",
        brand_color: "#FAA61A",
        empty_job_msg: "No current Openings"
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className=''>
      <link rel="stylesheet" href="https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css" type="text/css"/>
      <div className="embed_jobs_head embed_jobs_with_style_2 ">
        <div className="embed_jobs_head2">
          <div className="embed_jobs_head3">
            <div id="rec_job_listing_div"> </div>
          </div>
        </div>
      </div>
    </div>
  )
}